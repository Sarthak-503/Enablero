import React from 'react'
import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
  } from '@mui/material';
import whoweare from '@/animations/whoweare.json';
import Lottie from 'lottie-react';
import { useTranslations } from 'next-intl';

type WhoWeAreType = {
  mainHeading: string;
  subHeading: string;
  description: string;
  subDescription: string;
};


const WhoWeAreSection : React.FC<WhoWeAreType> = ({
  mainHeading,
  subHeading,
  description,
  subDescription
}) => {
    const t = useTranslations('ABOUT_US_PAGE');
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  
  return (
    <Box minHeight='100vh'>
    <Box
      sx={{
        textAlign: 'center',
        padding: isXs || isSm ? '1rem' : '2rem',
      }}
    >
      <Typography variant={isXs || isSm ? 'h4' : 'h2'}>
        {t(`MAIN_CONTENT.${mainHeading}`)}
      </Typography>
      <Typography variant='body2'>
        {t(`MAIN_CONTENT.${subHeading}`)}
      </Typography>
    </Box>

    <Grid
      container
      sx={{ mt: 2 }}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <Lottie
          loop
          animationData={whoweare}
          style={{
            width: isXs? '26rem'  : isSm? '34rem' : isMd ? '50rem' : isLg ? '40rem' : '45rem',
            height: isXs ? '20rem': isSm ? '24rem' : isMd  ? '28rem'  : isLg  ? '38rem'  : '28rem',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <Box
          padding={'1rem'}
          margin='0.8rem'
        >
          <Typography
            variant='body2'
            paragraph
          >
            {t(`MAIN_CONTENT.${description}`)}
          </Typography>
          <Typography
            variant='body2'
            paragraph
          >
            {t(`MAIN_CONTENT.${subDescription}`)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default WhoWeAreSection;