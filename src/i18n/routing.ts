import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Define your routing configuration
export const routing = defineRouting({
  locales: ['en', 'hn'], // Supported locales
  defaultLocale: 'en', // Fallback locale
});


export const { Link, redirect, usePathname, useRouter, getPathname } =  createNavigation(routing);
