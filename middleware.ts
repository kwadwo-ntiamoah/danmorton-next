import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionAsync } from './app/lib/auth.action'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    var session = await getSessionAsync()

    if (!session.isLoggedIn) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}