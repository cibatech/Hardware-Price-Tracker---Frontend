import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const cookie = await cookies()
  const userId = cookie.get("userId")

  const protectedRoutes = ["/alerts"]

  const isProtectedRoutes = protectedRoutes.includes(request.nextUrl.pathname)

  if (isProtectedRoutes && !userId) {
    const url = new URL("/auth/login", request.url)
    url.searchParams.set("unanthorized", "true")
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/alerts:path"],
}
