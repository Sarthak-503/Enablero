import {
  Box,
  Button,
  CircularProgress,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { locales } from '@/services';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useTransition, useCallback } from 'react';
import { useTranslations } from 'next-intl';

const LanguageSelector: React.FC<{ locale: string }> = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const t = useTranslations('LANGUAGE_SELECTORS');

  const handleLanguageMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleLanguageMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLocaleSelect = useCallback(
    (selectedLocale: string) => {
      startTransition(() => {
        const newUrl = `/${selectedLocale}${pathname.replace(`/${locale}`, '')}`;
        router.push(newUrl);
      });
      handleLanguageMenuClose();
    },
    [locale, pathname, router, handleLanguageMenuClose]
  );

  return (
    <>
      <Button
        onClick={handleLanguageMenuOpen}
        size='medium'
        color='inherit'
        sx={{
          borderRadius: '50%',
          border: '1px solid black',
          minWidth: 0,
          width: 35,
          height: 35,
        }}
      >
        {locale}
      </Button>

      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleLanguageMenuClose}
        disableScrollLock
      >
        {locales.map((localeItem) => (
          <MenuItem
            key={localeItem.id}
            onClick={() => handleLocaleSelect(localeItem.values)}
            disabled={isPending}
            sx={{
              borderBottom: 'solid 1px whitesmoke',
              padding: '8px 16px',
            }}
          >
            <Box
              display='flex'
              alignItems='center'
            >
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                sx={{ width: '100%' }}
              >
                <Typography variant='body2'>
                  {t(`${localeItem.label}`)}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ mx: 1 }}
                >
                  |
                </Typography>
                <Typography variant='body2'>{localeItem.values}</Typography>
              </Box>
              {isPending && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: '8px' }}
                />
              )}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
