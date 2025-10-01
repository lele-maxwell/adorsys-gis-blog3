import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const lang = (url.searchParams.get('lang') || '').toLowerCase();
  const short = lang.includes('-') ? lang.split('-')[0] : lang;

  const res = NextResponse.next();
  if (short === 'en' || short === 'fr') {
    res.cookies.set('lang', short, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: false,
    });
  }
  return res;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};


