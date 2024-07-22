'use client';
import HeroSection from '@/components/header/hero-section';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityIcon from '@mui/icons-material/Visibility';
// TODO Write the variables name in camelCase
import whoweare from '@/animations/whoweare.json';
import mission from '@/animations/mission.json';
import Lottie from 'lottie-react';
import { Box, Container, Grid, Typography , useMediaQuery, useTheme} from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import { aboutContent } from '@/services/about-content';

// TODO Fixed the hyderation error.

// TODO Add it on seprate file. Take idea from the case studies buttons.
const iconMapping: { [key: string]: JSX.Element } = {
  EMPOWERMENT_ICON: <AccessibilityNewIcon fontSize='large' />,
  NIMBLENESS_ICON: <DirectionsRunIcon fontSize='large' />,
  ACCOUNTABILITY_ICON: <VerifiedUserIcon fontSize='large' />,
  BOLDNESS_ICON: <WhatshotIcon fontSize='large' />,
  LEARNING_ICON: <SchoolIcon fontSize='large' />,
  EMPATHY_ICON: <FavoriteIcon fontSize='large' />,
  RELIABILITY_ICON: <SecurityIcon fontSize='large' />,
  OPENNESS_ICON: <PublicIcon fontSize='large' />,
};
// TODO Make the responsive design fixed.

// TODO Move it to the types folder
interface RawValue {
  title: string;
  description: string;
  icon: string;
}

const About = () => {
  const t = useTranslations('ABOUT_US_PAGE');
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  // TODO use useMemo hook or useCallback for functions. Add a little description about the function in comment.
  const values = aboutContent.mainSection.valueSection.values.map(
    (value: RawValue) => ({
      ...value,
      icon: iconMapping[value.icon],
    })
  );
  const stats = aboutContent.mainSection.statsSection.statistics;

  return (
    <>
      {/*  Hero Section */}
      <HeroSection
        sectionTitle={t(
          `HERO_SECTION.${aboutContent.heroSection.sectionTitle}`
        )}
        sectionSubtitle={t(
          `HERO_SECTION.${aboutContent.heroSection.sectionSubtitle}`
        )}
      />
      {/*  Main Content */}
      <Box sx={{margin:'1rem'}}>
        
        {/* Who we are */} 
        {/* <Box minHeight='100vh'>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant='h2'>
                {t(`MAIN_CONTENT.${aboutContent.mainSection.mainHeading}`)}
              </Typography>
              <Typography variant='body2'>
                {t(`MAIN_CONTENT.${aboutContent.mainSection.subHeading}`)}
              </Typography>
            </Box>

            <Grid
              sx={{
                mt: 2,
              }}
              container
              spacing={4}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Lottie
                  loop={true}
                  animationData={whoweare}
                  // TODO Change in rem
                  style={{ width: '44rem', height: '40rem' }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                marginTop='1rem'
              >
                <Box>
                  <Typography
                    variant='body2'
                    paragraph
                  >
                    {t(`MAIN_CONTENT.${aboutContent.mainSection.description}`)}
                  </Typography>
                  <Typography
                    variant='body2'
                    paragraph
                  >
                    {t(
                      `MAIN_CONTENT.${aboutContent.mainSection.subdescription}`
                    )}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box> */}
         {/* <Box minHeight='100vh'>
      <Box
        sx={{
          textAlign: 'center',
          padding: isXs || isSm ? '1rem' : '2rem',
        }}
      >
        <Typography variant={isXs || isSm ? 'h4' : 'h2'}>
          {t(`MAIN_CONTENT.${aboutContent.mainSection.mainHeading}`)}
        </Typography>
        <Typography variant='body2'>
          {t(`MAIN_CONTENT.${aboutContent.mainSection.subHeading}`)}
        </Typography>
      </Box>

      <Grid
        sx={{
          mt: 2,
        }}
        container
        spacing={isXs || isSm ? 2 : 4}
      >
          <Lottie
            loop={true}
            animationData={whoweare}
            style={{
              // width: isXs || isSm ? '20rem' : isMd ? '30rem' : '44rem',
              width:'80%',
              height:'100%'
              // height: isXs || isSm ? '18rem' : isMd ? '28rem' : '40rem',
            }}
          />
          <Box padding={isXs || isSm ? '1rem' : '2rem'}>
            <Typography variant='body2' paragraph>
              {t(`MAIN_CONTENT.${aboutContent.mainSection.description}`)}
            </Typography>
            <Typography variant='body2' paragraph>
              {t(`MAIN_CONTENT.${aboutContent.mainSection.subdescription}`)}
            </Typography>
          </Box>
        </Grid>
    </Box>   */}
        <Box minHeight='100vh'>
      <Box
        sx={{
          textAlign: 'center',
          padding: isXs || isSm ? '1rem' : '2rem',
        }}
      >
        <Typography variant={isXs || isSm ? 'h4' : 'h2'}>
          {t(`MAIN_CONTENT.${aboutContent.mainSection.mainHeading}`)}
        </Typography>
        <Typography variant='body2'>
          {t(`MAIN_CONTENT.${aboutContent.mainSection.subHeading}`)}
        </Typography>
      </Box>

      <Grid
        container
        // spacing={isXs || isSm ? 2 : 4}
        sx={{ mt: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Lottie
            loop
            animationData={whoweare}
            style={{
              width: isXs ? '26rem' :  isSm ? '34rem' : isMd ? '50rem' : isLg ? '40rem' : '45rem',
              height: isXs? '20rem' : isSm ? '24rem' : isMd ? '28rem' : isLg ? '38rem' : '28rem',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box padding={'1rem'} margin='0.8rem'>
            <Typography variant='body2' paragraph>
              {t(`MAIN_CONTENT.${aboutContent.mainSection.description}`)}
            </Typography>
            <Typography variant='body2' paragraph>
              {t(`MAIN_CONTENT.${aboutContent.mainSection.subdescription}`)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>


        {/* Mission Section */}
         <Box> </Box>{' '}

        {/* Vission Section */}
         <Box> </Box>{' '}
      </Box>
    </>
  );
};

export default About;
