import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.svg|images|assets|png|svg|jpg|jpeg|gif|webp|manifest.json|firebase-messaging-sw.js).*)",
],
};