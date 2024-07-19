'use client';
import logo from '@/assets/png/Enablero Logo.png';
import { links } from '@/services';
import { COMPONENT } from '@/types';
import MenuIcon from '@mui/icons-material/Menu';

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useMemo, useCallback } from 'react';
import LanguageSelector from './language-selector';
import { getLangDir } from 'rtl-detect';
import { socialMediaLinks } from '@/services';
import { SocialMediaLinkItemType } from '@/types';

const Navbar = () => {
  const router = useRouter();
  const theme = useTheme();
  const locale = useLocale();
  const direction = getLangDir(locale);
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  // Filtering the links according the component and priority.
  const filteredLinks = useMemo(
    () =>
      links
        .filter((link) => link.active)
        .filter(
          (link) => link.for === COMPONENT.BOTH || link.for === COMPONENT.NAVBAR
        )
        .sort((a, b) => a.priority - b.priority),
    []
  );

  // Action handler to toggle drawer, memoized with useCallback
  const toggleDrawer = useCallback(
    (open: boolean) => () => {
      setOpen(open);
    },
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
      <AppBar
        sx={{
          position: 'static',
        }}
      >
        <Toolbar>
          <Box
            display='flex'
            alignItems='center'
          >
            <Image
              src={logo}
              alt='Enablero Logo'
              width={40}
              height={40}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                router.push(`/${locale}`);
              }}
            />
            <Typography
              component={Link}
              href={`/${locale}`}
              variant='h6'
              sx={{
                ml: '0.30rem',
                cursor: 'pointer',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: '750',
              }}
            >
              {t(`COMMON_COMPONENTS.NAVBAR_ENABLERO_TEXT`)}
            </Typography>
          </Box>

          {/* Page Links */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '4rem' }}>
            {filteredLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${locale}${link.href}`}
                style={{
                  color: 'inherit',
                  margin: '0 1.2rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                {t(`LINKS.${link.label}`)}
              </Link>
            ))}
          </Box>

          {/* // Night Mode and Internationalization */}
          <Box
            sx={[
              { display: { xs: 'none', md: 'flex' }, alignItems: 'center' },
              direction === 'rtl' ? { mr: 'auto' } : { ml: 'auto' },
            ]}
          >
            {/* TODO currently commented will add it later on */}

            {/* <Box px='0.25rem'>
              <IconButton color='inherit'>
                <LightModeIcon fontSize='medium' />
              </IconButton>
            </Box>

            <Divider
              orientation='vertical'
              variant='fullWidth'
              flexItem
            /> */}
            <Box mx='0.5rem'>
              <LanguageSelector locale={locale} />
            </Box>
          </Box>

          {/* Navigation Drawer */}
          <Box
            sx={[
              { display: { xs: 'block', md: 'none' } },
              direction === 'rtl' ? { mr: 'auto' } : { ml: 'auto' },
            ]}
          >
            <IconButton
              color='inherit'
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize='medium' />
            </IconButton>
            <Drawer
              anchor='right'
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                },
              }}
            >
              <Box
                minWidth={250}
                p='0.75rem'
              >
                <Typography
                  textAlign='center'
                  onClick={() => {
                    router.push('/');
                    setOpen(false);
                  }}
                  variant='h5'
                  sx={{ cursor: 'pointer', color: '#000000' }}
                >
                  {t(`COMMON_COMPONENTS.NAVBAR_ENABLERO_TEXT`)}
                </Typography>

                {/* Links in Drawer */}
                <List>
                  {filteredLinks.map((link) => (
                    <ListItem
                      key={link.id}
                      disablePadding
                    >
                      <Link
                        key={link.id}
                        href={`/${locale}${link.href}`}
                        style={{
                          color: 'inherit',
                          margin: '0.5rem ',
                          textDecoration: 'none',
                          fontWeight: '500',
                        }}
                      >
                        <ListItemButton
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {t(`LINKS.${link.label}`)}
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>

                <Box bgcolor='lightgray'>
                  <Divider />
                </Box>

                {/* Night Mode and Internationalization in Drawer */}
                <Box m={2}>
                  <LanguageSelector locale={locale} />
                </Box>

                {/*TODO Will add the night mode later  */}

                {/* <Box display='flex'>
                  <IconButton color='inherit'>
                    <LightModeIcon fontSize='medium' />
                  </IconButton>
                  <Typography
                    p='0.25rem'
                    variant='overline'
                  >
                    Light Mode
                  </Typography>
                </Box> */}

                {/* Social Icons */}
                <Box
                  position='absolute'
                  bottom='1.25rem'
                >
                  <Box display='flex'>
                    {filteredSocialMediaLinks.map(
                      (icon: SocialMediaLinkItemType) => (
                        <IconButton
                          key={icon.id}
                          href={icon.href}
                          color='inherit'
                          target='_blank'
                          sx={{ mx: '0.1rem' }}
                        >
                          {icon.icon && React.createElement(icon.icon)}
                        </IconButton>
                      )
                    )}
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
