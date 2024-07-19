'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { footerCallToActionContent } from '@/services/footer-call-to-action-content';

const FooterCallToAction: React.FC<{ locale: string }> = ({ locale }) => {
  const router = useRouter();
  const t = useTranslations('FOOTER_CALL_TO_ACTION');

  const handleClick = () => {
    router.push(`/${locale}/contact-us`);
  };

  return (
    <>
      <Divider sx={{ mt: 5 }} />
      <Box
        sx={{
          px: { xs: 1, md: '5rem' },
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              md={8}
              item
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                <Typography variant='h4'>
                  {t(`${footerCallToActionContent.title}`)}
                </Typography>
                <Typography
                  variant='body1'
                  pb={2}
                >
                  {t(`${footerCallToActionContent.subtitle}`)}
                </Typography>
              </Box>
            </Grid>

            {/* Button */}
            <Grid
              xs={12}
              md={4}
              item
              sx={{
                p: { xs: 0, md: '1rem' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'end' },
              }}
            >
              <Button
                variant='outlined'
                size='large'
                onClick={handleClick}
              >
                {t(`${footerCallToActionContent.buttonText}`)}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterCallToAction;
