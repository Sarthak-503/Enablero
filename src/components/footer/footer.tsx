'use client';
import React from 'react';
import { useMemo } from 'react';
import { links, socialMediaLinks } from '@/services';
import { COMPONENT, LINK_HREF, SocialMediaLinkItemType } from '@/types';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { footerContent } from '@/services';
import { usePathname } from 'next/navigation';
import FooterCallToAction from './footer-call-to-action';
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme(); // Access the theme object
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  // Logic to hide the footer call-to-action in some pages.
  const showFooterCTA = useMemo(() => {
    const pages = new Set([LINK_HREF.CONTACT_US, LINK_HREF.SITEMAP]);
    return !Array.from(pages).some((page) => pathname.includes(page));
  }, [pathname]);

  // Filtering links according to the components.
  const filteredLinks = useMemo(
    () =>
      links
        .filter((link) => link.active)
        .filter(
          (link) => link.for === COMPONENT.BOTH || link.for === COMPONENT.FOOTER
        )
        .sort((l1, l2) => l1.priority - l2.priority),
    []
  );

  // Filtering social icons according to the priority.
  const filteredSocialMediaLinks = useMemo(
    () =>
      socialMediaLinks
        .filter((link) => link.active)
        .sort((l1, l2) => l1.priority - l2.priority),
    []
  );

  return (
    <>
      {/* Footer Call to Action */}
      {showFooterCTA && <FooterCallToAction locale={locale} />}

      {/* Footer */}
      <Box
        bgcolor={theme.palette.secondary.main}
        color={theme.palette.secondary.contrastText}
        py={4}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            alignItems='center'
          >
            {/* Logo Section */}
            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              spacing={4}
            >
              <Box
                mt={3}
                display='flex'
                flexDirection='column'
                alignItems={{ xs: 'center', md: 'flex-start' }}
                height='100%'
              >
                <Typography
                  variant='h4'
                  color={theme.palette.secondary.contrastText}
                  component='div'
                  sx={{ fontWeight: 'bold', mt: 2 }}
                >
                  {t(`FOOTER.${footerContent.enableroText}`)}
                </Typography>
              </Box>
            </Grid>

            {/* Navigation Links */}
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box
                mt={3}
                display='flex'
                justifyContent='center'
                flexWrap='wrap'
              >
                {filteredLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`/${locale}${link.href}`}
                    style={{
                      textDecoration: 'none',
                      margin: '0.5rem 1.5rem',
                    }}
                  >
                    <Typography
                      color={theme.palette.secondary.contrastText}
                      variant='body1'
                    >
                      {t(`LINKS.${link.label}`)}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Social Media Icons */}
            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
            >
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
                mt={3}
              >
                {filteredSocialMediaLinks.map(
                  (icon: SocialMediaLinkItemType) => (
                    <IconButton
                      key={icon.id}
                      href={icon.href}
                      color='inherit'
                      target='_blank'
                      sx={{ mx: 1 }}
                    >
                      {icon.icon && React.createElement(icon.icon)}
                    </IconButton>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Copyright Notice */}
        <Box
          textAlign='center'
          mt={4}
        >
          <Typography
            variant='body2'
            color={theme.palette.secondary.contrastText}
          >
            &copy; {new Date().getFullYear()}{' '}
            {t(`FOOTER.${footerContent.copyrightText}`)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
