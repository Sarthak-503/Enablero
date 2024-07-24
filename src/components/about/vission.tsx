import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { aboutContent } from '@/services/about-content';
import VissionImage from '../../assets/png/About-png/vission.jpg';
import Image from 'next/image';
const VissionSection = () => {
  const t = useTranslations('ABOUT_US_PAGE');
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box>
      <Container sx={{ mt: '6rem' }}>
        <Grid
          container
          spacing={2}
          alignItems='center'
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              display='flex'
              justifyContent='center'
            >
            <Image
            src={VissionImage}
            alt={'Vission Image'}
            width={500}
            height={400}
          />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant='h2'
                fontWeight='bold'
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginRight: 2,
                  }}
                >
                  <VisibilityIcon fontSize='large' />
                </Box>

                {t(
                  `MAIN_CONTENT.VISSION_SECTION.${aboutContent.mainSection.vissionSection.heading}`
                )}
              </Typography>
              <Box
                sx={{
                  borderBottom: '2px solid black',
                  width: '50px',
                  marginTop: 1,
                  textAlign: 'center',
                }}
              />
              <Typography
                variant='body1'
                component='p'
                sx={{ marginTop: 2 }}
              >
                {t(
                  `MAIN_CONTENT.VISSION_SECTION.${aboutContent.mainSection.vissionSection.description}`
                )}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VissionSection;
