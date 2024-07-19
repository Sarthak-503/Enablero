'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Logo from '@/assets/png/Enablero Logo.png';
import { useRouter } from 'next/navigation';
import { commonComponentContent } from '@/services';
import { useLocale, useTranslations } from 'next-intl';

const HeroSection: React.FC<{
  sectionTitle: string;
  sectionSubtitle: string;
}> = ({ sectionTitle, sectionSubtitle }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('COMMON_COMPONENTS');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box p={1}>
              <Typography
                variant='h3'
                sx={{
                  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
                  fontWeight: 'bold',
                  color: '#000',
                  mb: 1,
                  textTransform: 'uppercase',
                }}
              >
                {sectionTitle}
              </Typography>
              <Typography
                mt={2}
                sx={{ mx: 'auto', mb: 1 }}
              >
                {sectionSubtitle}
              </Typography>
            </Box>

            {/* Side by side section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                mt: 2,
                px: 1,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  mb: { xs: 1, md: 0 },
                }}
              >
                {t(`HERO_SECTION_CALL_TO_ACTION_SUBTEXT`)}
              </Typography>

              <Button
                variant='contained'
                onClick={() => {
                  router.push(`/${locale}/contact-us`);
                }}
                sx={{
                  p: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  textTransform: 'none',
                  ml: { md: 2 },
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.2s ease-in-out',
                  zIndex: 1,
                }}
              >
                {t(`${commonComponentContent.heroSectionButtonText}`)}
              </Button>
            </Box>
          </Grid>

          {/* Image Grid */}
          <Grid
            sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
            md={4}
            item
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Image
                src={Logo}
                alt='CompanyLogo'
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
