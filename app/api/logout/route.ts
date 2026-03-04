// app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('authToken', '', { maxAge: -1, path: '/' });
  const response = NextResponse.json({ message: 'Logged out' });
  response.headers.set('Set-Cookie', cookie);
  return response;
}