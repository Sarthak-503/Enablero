'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { homeContent } from '@/services';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const AboutUs = () => {
  const t = useTranslations('HOME_PAGE.ABOUT_US');
  const router = useRouter();
  const locale = useLocale();

  const handleKnowMoreClick = () => {
    router.push(`/${locale}/about-us`);
  };

  return (
    <Box
      my={8}
      py={6}
      bgcolor='background.paper'
    >
      <Container
        maxWidth='lg'
        sx={{ textAlign: 'center' }}
      >
        <Box mb={6}>
          <Typography
            variant='h2'
            fontWeight='bold'
            gutterBottom
          >
            {t(`${homeContent.aboutUs.sectionTitle}`)}
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
          >
            {t(`${homeContent.aboutUs.sectionSubtitle}`)}
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          justifyContent='center'
        >
          <Grid
            item
            xs={12}
            mt={3}
            sm={4}
            textAlign='center'
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px',
              p: 2,
            }}
          >
            <Typography
              variant='h4'
              fontWeight='bold'
              color='primary.main'
            >
              15+
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
            >
              years of experience in software engineering and IT consulting
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            mt={3}
            textAlign='center'
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px',
              p: 2,
            }}
          >
            <Typography
              variant='h4'
              fontWeight='bold'
              color='primary.main'
            >
              500+
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
            >
              software developers and other IT professionals on board
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            textAlign='center'
            mt={3}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px',
              p: 2,
            }}
          >
            <Typography
              variant='h4'
              fontWeight='bold'
              color='primary.main'
            >
              35+
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
            >
              active clients building and augmenting software with us
            </Typography>
          </Grid>
        </Grid>

        <Box
          textAlign='right'
          mt={4}
        >
          <Button
            variant='outlined'
            size='large'
            onClick={handleKnowMoreClick}
          >
            Know More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
