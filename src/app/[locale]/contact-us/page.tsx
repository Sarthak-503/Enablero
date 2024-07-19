'use client';
import HeroSection from '@/components/header/hero-section';
import ContactForm from '@/forms/contact-form';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { contactContent } from '@/services';

const Contact = () => {
  const t = useTranslations('CONTACT_PAGE');

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        sectionTitle={t(
          `HERO_SECTION.${contactContent.heroSection.sectionTitle}`
        )}
        sectionSubtitle={t(
          `HERO_SECTION.${contactContent.heroSection.sectionSubtitle}`
        )}
      />
      {/* Main Content */}
      <Box
        my={'3rem'}
        p={1}
      >
        <Grid container>
          <Grid
            xs={12}
            md={9}
            item
          >
            <Container maxWidth='md'>
              <Box sx={{ p: 1, px: { xs: 1, md: 3 }, mt: 1 }}>
                <Typography
                  px={1}
                  variant='h5'
                >
                  {t(`MAIN_CONTENT.${contactContent.mainContent.mainHeading}`)}
                </Typography>
                <Typography variant='h2'>
                  {t(`MAIN_CONTENT.${contactContent.mainContent.subHeading}`)}
                </Typography>
              </Box>

              {/* Divider */}
              <Divider sx={{ mt: 2 }}>
                <Typography variant='overline'>
                  {t(`MAIN_CONTENT.${contactContent.mainContent.dividerText}`)}
                </Typography>
              </Divider>

              {/* Contact Form */}
              <Box
                sx={{ mx: { xs: 0, md: 5 } }}
                mt={3}
              >
                <Typography variant='h4'>
                  {t(
                    `MAIN_CONTENT.FORM_SECTION.${contactContent.mainContent.formSection.title}`
                  )}
                </Typography>
                <Typography
                  variant='body1'
                  paragraph
                >
                  {t(
                    `MAIN_CONTENT.FORM_SECTION.${contactContent.mainContent.formSection.description}`
                  )}
                </Typography>
                <ContactForm />
              </Box>
            </Container>
          </Grid>

          {/* Sidebar */}
          <Grid
            xs={12}
            md={3}
            item
          >
            <Box
              p={4}
              sx={{ mt: { xs: 5, lg: 0 } }}
            >
              <Box>
                <Typography variant='h6'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.${contactContent.mainContent.sidebar.contactHeading}`
                  )}
                </Typography>
                <Typography variant='body2'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.${contactContent.mainContent.sidebar.contactDescription}`
                  )}
                </Typography>
              </Box>

              {/* Chat to us */}
              <Box mt={5}>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant='subtitle2'>
                    {t(
                      `MAIN_CONTENT.SIDEBAR.CHAT_TO_US.${contactContent.mainContent.sidebar.chatToUs.heading}`
                    )}
                  </Typography>
                </Box>
                <Typography variant='body2'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.CHAT_TO_US.${contactContent.mainContent.sidebar.chatToUs.description}`
                  )}
                </Typography>
                <Typography variant='subtitle1'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.CHAT_TO_US.${contactContent.mainContent.sidebar.chatToUs.email}`
                  )}
                </Typography>
              </Box>

              {/* Office */}
              <Box mt={5}>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant='subtitle2'>
                    {t(
                      `MAIN_CONTENT.SIDEBAR.OFFICE.${contactContent.mainContent.sidebar.office.heading}`
                    )}
                  </Typography>
                </Box>
                <Typography variant='body2'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.OFFICE.${contactContent.mainContent.sidebar.office.description}`
                  )}
                </Typography>
                <Typography variant='subtitle1'>
                  {t(
                    `MAIN_CONTENT.SIDEBAR.OFFICE.${contactContent.mainContent.sidebar.office.address}`
                  )}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
