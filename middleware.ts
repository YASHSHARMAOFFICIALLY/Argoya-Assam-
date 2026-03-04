// middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (err) {
    const response = NextResponse.redirect(new URL('/signin', req.url));
    response.cookies.delete('authToken');
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect /dashboard and subpaths
};