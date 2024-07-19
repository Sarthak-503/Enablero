'use client';
import React, { useMemo } from 'react';
import { Box, Grid, Typography, Container, Button } from '@mui/material';
import { homeContent } from '@/services';
import { useLocale, useTranslations } from 'next-intl';
import { servicesContent } from '@/services';
import { commonComponentContent } from '@/services';
import ServicesCard from '../cards/services';
import { useRouter } from 'next/navigation';

const OurServices = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();

  // Filtering the serivce card to show only featured services
  const filteredServices = useMemo(() => {
    return servicesContent.services.filter(
      (service) => service.featured === true
    );
  }, [servicesContent.services]);

  return (
    <>
      <Box>
        <Container
          maxWidth='lg'
          sx={{
            mt: '3.125rem',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h2'
            pb={1}
            fontWeight='bold'
          >
            {t(
              `HOME_PAGE.SERVICE_SECTION.${homeContent.serviceSection.sectionTitle}`
            )}
          </Typography>
          <Typography
            variant='body1'
            pb={2}
            sx={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}
          >
            {t(
              `HOME_PAGE.SERVICE_SECTION.${homeContent.serviceSection.sectionSubtitle}`
            )}
          </Typography>

          <Box
            mt={3}
            px={2}
          >
            <Grid
              container
              spacing={2}
              justifyContent='center'
            >
              {filteredServices.map((service) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={service.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: '1.25rem',
                  }}
                >
                  <ServicesCard
                    keyFeatureTitle={servicesContent.keyFeatureTitle}
                    service={service}
                  />
                </Grid>
              ))}
            </Grid>
            <Box
              textAlign={'end'}
              mt={3}
            >
              <Button
                variant='outlined'
                size='large'
                onClick={() => router.push(`/${locale}/services`)}
              >
                {t(
                  `COMMON_COMPONENTS.${commonComponentContent.learnMorebuttonText}`
                )}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OurServices;
