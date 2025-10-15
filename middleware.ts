import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token"); // sesuaikan nama cookie next-auth

  const isLoggedIn = !!token;
  const pathname = request.nextUrl.pathname;

  if (
    !isLoggedIn &&
    ProtectedRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
