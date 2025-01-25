import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { Languages, languages } from '@/constants';
 
export const routing = defineRouting({
  locales: languages,
  defaultLocale: Languages.pt
});
 
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);