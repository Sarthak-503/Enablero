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
import { Box, Container, Grid, Typography , useMediaQuery,Card, useTheme} from '@mui/material';
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



        {/* Statistics Section */}
         <Box> 
               <Box sx={{ position: 'relative', mt: '6rem' }}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            >
              {/* TODO Add it in seprate file */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1440 320'
                style={{ width: '100%', height: 'auto' }}
              >
                <path
                  fill='#4CAF50'
                  fillOpacity='0.7'
                  d='M0,160L21.8,154.7C43.6,149,87,139,131,133.3C174.5,128,218,128,262,154.7C305.5,181,349,235,393,229.3C436.4,224,480,160,524,154.7C567.3,149,611,203,655,240C698.2,277,742,299,785,288C829.1,277,873,235,916,218.7C960,203,1004,213,1047,186.7C1090.9,160,1135,96,1178,90.7C1221.8,85,1265,139,1309,181.3C1352.7,224,1396,256,1418,272L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'
                ></path>
              </svg>
            </Box>

            <Container
              maxWidth='xl'
              sx={{ position: 'relative', zIndex: 2 }}
            >
              <Grid
                container
                spacing={4}
                justifyContent='space-between'
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <Grid
                    container
                    spacing={4}
                  >
                    {stats.map((stat, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        key={index}
                      >
                        <Card
                          sx={{
                            p: 3,
                            bgcolor: 'white',
                            boxShadow: 3,
                            textAlign: 'center',
                            borderRadius: '0.3rem',
                            '&:hover': {
                              transition: 'border-color 0.5s',
                              borderColor: 'primary.dark',
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                              cursor: 'pointer',
                            },
                          }}
                        >
                          <Typography variant='h3'>
                            {t(
                              `MAIN_CONTENT.STATS_SECTION.STATISTICS.${stat.heading}`
                            )}
                          </Typography>
                          <Typography variant='subtitle1'>
                            {t(
                              `MAIN_CONTENT.STATS_SECTION.STATISTICS.${stat.description}`
                            )}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      px: 1,
                    }}
                  >
                    <Typography variant='body2'>
                      {t(
                        `MAIN_CONTENT.STATS_SECTION.${aboutContent.mainSection.statsSection.submitButton}`
                      )}
                    </Typography>
                    <Typography
                      variant='h4'
                      gutterBottom
                    >
                      {t(
                        `MAIN_CONTENT.STATS_SECTION.${aboutContent.mainSection.statsSection.heading}`
                      )}
                    </Typography>
                    <Typography variant='body1'>
                      {t(
                        `MAIN_CONTENT.STATS_SECTION.${aboutContent.mainSection.statsSection.description}`
                      )}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
         </Box>

        {/* Mission Section */}
         <Box> 
         <Container
  sx={{
    mt: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' }, // Adjust top margin based on screen size
  }}
>
  <Typography
    variant='h2'
    align='center'
    sx={{
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } // Adjust font size for h2 based on screen size
    }}
  >
    {t(
      `MAIN_CONTENT.MISSION_SECTION.${aboutContent.mainSection.missionSection.heading}`
    )}
  </Typography>
  <Typography
    variant='body2'
    align='center'
    sx={{
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' } // Adjust font size for body2 based on screen size
    }}
  >
    {t(
      `MAIN_CONTENT.MISSION_SECTION.${aboutContent.mainSection.missionSection.subHeading}`
    )}
  </Typography>
  {/* TODO Add a subtitle here in the mission */}
  <Grid
    container
    spacing={3}
    sx={{ mt: 2 }}
    alignItems='center'
  >
    <Grid
      item
      xs={12}
      md={6}
    >
      <Typography
        variant='body1'
        textAlign={{ xs: 'center', sm:'center', md: 'start',lg:'start' }} // Center text on smaller screens, align left on medium and larger screens
        // sx={{
        //   fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' } // Adjust font size for body1 based on screen size
        // }}
      >
        {t(
          `MAIN_CONTENT.MISSION_SECTION.${aboutContent.mainSection.missionSection.description}`
        )}
      </Typography>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: 'flex',
        justifyContent: 'center' // Center Lottie animation on smaller screens
      }}
    >
      <Lottie
        animationData={mission}
        style={{ width: '100%', height: '100%' }}
      />
    </Grid>
  </Grid>
</Container>
         </Box>

        {/* Vission Section */}
         <Box>
            
         </Box>
        {/* Value Section */}
         <Box>
          
         </Box>
      </Box>
    </>
  );
};

export default About;
