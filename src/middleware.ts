import createMiddleware from 'next-intl/middleware';
import { locales } from './services';

const filterdLocales = locales.map((locale) => locale.values);

export default createMiddleware({
  locales: filterdLocales,
  defaultLocale: 'en',
  localeDetection: true,
});

// This value can not be dynamic
export const config = {
  matcher: ['/', `/(en|hi|ar|ru|ja|de)/:path*`],
};
