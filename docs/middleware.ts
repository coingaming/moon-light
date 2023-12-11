import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('intercepted', request.url)
  let isPlaywright = !!request.headers.get('x-playwright')
  // if (!isPlaywright) {
  //   return NextResponse.next()
  // }

  const {pathname} = request.nextUrl;
  const match = /\w*\/client\/(\w*.)\/(\w*.)/gm.exec(pathname)
  const testUnit = {
    component: match?.[1],
    example: match?.[2],
  }
  if (!testUnit.component || !testUnit.example) return NextResponse.next();

  request.nextUrl.searchParams.set('raw', testUnit.example)
  request.nextUrl.pathname = `/client/${testUnit.component}`
  return NextResponse.redirect(request.nextUrl)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/client/:component*'
}