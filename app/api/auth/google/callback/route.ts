// app/api/auth/google/callback/route.ts
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');


  if (!code) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/signin?error=Auth failed`);
  }
  console.log("🟡 Exchanging code for token...");

  // Exchange code for tokens
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/google/callback`,
      grant_type: 'authorization_code',
    }),
  });
  console.log("🟢 Fetching user profile...");

  const { access_token } = await tokenRes.json();
  if (!access_token) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/signin?error=Token exchange failed`);
  }
  console.log("🟠 Querying database with Prisma...");

  // Fetch user profile
  const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  const { id: googleId, email } = await userRes.json();
  console.log("✅ Database query successful");

  let user = await prisma.user.findFirst({
    where: { OR: [{ googleId }, { email }] },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { email, googleId },
    });
  } else if (!user.googleId) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: { googleId },
    });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1d' });

  const cookie = serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400,
    path: '/',
  });

  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`); // Redirect to home/dashboard
  response.headers.set('Set-Cookie', cookie);
  return response;
}