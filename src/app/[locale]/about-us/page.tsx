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
import { Box, Container, Grid, Typography } from '@mui/material';
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
      <Box>
        {/* Who we are */} 
        <Box>
          
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
