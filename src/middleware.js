import { NextResponse } from 'next/server';
const { verifyToken } = require('./utils/generateVerifyJwt');

export async function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  const tokenApp = request.cookies.get('tokenApp')

  if (!tokenApp) {
    console.log("sem token")
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  try { 
    const decoded = await verifyToken(tokenApp.value);
    if(decoded.user) return NextResponse.next()
  } catch (error) {
    console.log('error:'+ error.message)
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: ['/', '/api/users/:path*',],
}