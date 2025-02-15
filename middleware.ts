import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/signin",
  "/signup",
  "/features",
  "/pricing",
  "/api/webhook/register"
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const isHomePage = req.nextUrl.pathname === "/";

  if (userId && isHomePage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};