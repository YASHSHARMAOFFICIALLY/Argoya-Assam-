import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { error } from 'console';


export async function Post(req:Request){
    const {email,password}=await req.json()

    if(!email || !password ){
        return NextResponse.json({error:'Missing Field'},{status:400})
    }
    const user = await prisma.user.findUnique({where:{email}})
    if(!user || !user.password || !(await bcrypt.compare(password,user.password))){
        return NextResponse.json({error:'Invalid Creditianl '},{status:401})
    }
    const token = jwt.sign({userId:user.id,email:user.email},process.env.JWT_SECRET!,{expiresIn:'1d'})

    const cookie = serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400, // 1 day
    path: '/',
  });
  
  const response = NextResponse.json({ message: 'Signed in' });
  response.headers.set('Set-Cookie', cookie);
  return response;
}