'use client';
import HeroSection from '@/components/header/hero-section';
import WhoWeAreSection from '@/components/about/who-we-are';
import MissionSection from '@/components/about/mission';
import Statistics from '@/components/about/statistics';
import VissionSection from '@/components/about/vission';
import ValueSection from '@/components/about/value';
import { aboutContent } from '@/services/about-content';
import {
  Box,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';


const About = () => {
  const t = useTranslations('ABOUT_US_PAGE');

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
      <Box sx={{ margin: '1rem' }}>
        <WhoWeAreSection  
        mainHeading={aboutContent.mainSection.mainHeading}
        subHeading={aboutContent.mainSection.subHeading}
        description={aboutContent.mainSection.description}
        subDescription={aboutContent.mainSection.subDescription}
        />

        {/* Statistics Section */}
        <Statistics 
        learnMoreText = {aboutContent.mainSection.statsSection.learnMoreText}
        heading = {aboutContent.mainSection.statsSection.heading}
        description = {aboutContent.mainSection.statsSection.description}
        statsdetails = {aboutContent.mainSection.statsSection.statistics} 
        />

        {/* Mission Section */}
        <MissionSection 
        heading = {aboutContent.mainSection.missionSection.heading}
        subHeading = {aboutContent.mainSection.missionSection.subHeading}
        description = {aboutContent.mainSection.missionSection.description}
        />
        

        {/* Vission Section */}
        <VissionSection/>

        {/* Value Section */}
        <Box>
           <ValueSection/>
        </Box>
      </Box>
    </>
  );
};

export default About;
