import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { error } from 'console'
import { NextResponse } from 'next/server'

export async function POST(req:Request){
    const {email,password } = await req.json()
    if(!email || !password){
        return NextResponse.json({error:'Missing Field'},{status:400})
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  const existingUser = await prisma.user.findUnique({where:{email}})
  if (existingUser) {
    return NextResponse.json({ error: 'User exists' }, { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  return NextResponse.json({ message: 'User created' }, { status: 201 });
}
