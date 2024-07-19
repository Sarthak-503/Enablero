import HeroSection from '@/components/header/hero-section';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { servicesContent } from '@/services';
import Testimonials from '@/components/home/testimonials';
import ServicesCard from '@/components/cards/services';

const Services = () => {
  const t = useTranslations('SERVICE_PAGE');

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        sectionTitle={t(
          `HERO_SECTION.${servicesContent.heroSection.SectionTitle}`
        )}
        sectionSubtitle={t(
          `HERO_SECTION.${servicesContent.heroSection.SectionSubtitle}`
        )}
      />
      {/* Main Content */}
      <Container
        maxWidth='lg'
        sx={{
          mt: '3.125rem',
          px: { xs: '0.125rem', sm: '0.3125rem' },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h2'>
          {t(`SERVICE_SECTION.${servicesContent.serviceSection.sectionTitle}`)}
        </Typography>
        <Typography variant='subtitle1'>
          {t(
            `SERVICE_SECTION.${servicesContent.serviceSection.sectionSubtitle}`
          )}
        </Typography>

        {/* Services */}
        <Box
          mt={5}
          px={2}
        >
          <Grid
            container
            spacing={2}
            justifyContent='center'
          >
            {servicesContent.services.map((service) => (
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
        </Box>
      </Container>

      {/* Client Testimonials */}
      <Testimonials />
    </>
  );
};

export default Services;
