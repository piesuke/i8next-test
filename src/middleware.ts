import { NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";

import { i18nConfig } from "../i18nConfig";

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, {
    ...i18nConfig,
  });
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (image files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
