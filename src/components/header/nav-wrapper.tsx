'use client';
import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './nav-bar';
import Footer from '../footer/footer';
import { LINK_HREF } from '@/types';
import { useLocale } from 'next-intl';

type NavBarWrapperProps = {
  children: React.ReactNode;
};

const NavbarWrapper: React.FC<NavBarWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const locale = useLocale();

  const routesWithNavAndFooter = useMemo(
    () => [
      `/${locale}`,
      `/${locale}${LINK_HREF.SERVICES}`,
      `/${locale}${LINK_HREF.CASE_STUDIES}`,
      `/${locale}${LINK_HREF.ABOUT_US}`,
      `/${locale}${LINK_HREF.CONTACT_US}`,
      `/${locale}${LINK_HREF.TERMS_AND_CONDITIONS}`,
      `/${locale}${LINK_HREF.PRIVACY_POLICY}`,
      `/${locale}${LINK_HREF.SITEMAP}`,
    ],
    [locale]
  );

  const shouldShowNavAndFooter = useMemo(() => {
    return routesWithNavAndFooter.includes(pathname);
  }, [pathname, routesWithNavAndFooter]);

  return (
    <>
      {shouldShowNavAndFooter && <Navbar />}
      {children}
      {shouldShowNavAndFooter && <Footer />}
    </>
  );
};

export default NavbarWrapper;
