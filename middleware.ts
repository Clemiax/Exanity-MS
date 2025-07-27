import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Rediriger /contact vers /discord
  if (request.nextUrl.pathname === "/contact") {
    return NextResponse.redirect(new URL("/discord", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/contact"],
}
