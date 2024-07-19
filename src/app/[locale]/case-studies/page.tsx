'use client';
import { useState, useMemo } from 'react';
import HeroSection from '@/components/header/hero-section';
import { Box, Button, Container, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import { portfolioContent } from '@/services';
import PortfolioCard from '@/components/cards/portfolio-card';
import { PortfolioProjectType } from '@/types';
import CategoryIcon from '@/components/common/category-icon';
import ClientLogo from '@/components/common/client-logo';

const CaseStudies = () => {
  const t = useTranslations('PORTFOLIO_PAGE');
  const [tab, setTab] = useState<string>('TAG_ALL');

  const setMyCards = (value: string) => {
    setTab(value);
  };

  const filteredProjects: PortfolioProjectType[] = useMemo(() => {
    return tab === 'TAG_ALL'
      ? portfolioContent.mainContent.projects.projectInformation
      : portfolioContent.mainContent.projects.projectInformation.filter(
          (project) => project.tag === tab
        );
  }, [tab]);

  return (
    <>
      <HeroSection
        sectionTitle={t('HERO_SECTION.HERO_SECTION_TITLE')}
        sectionSubtitle={t('HERO_SECTION.HERO_SECTION_SUBTITLE')}
      />
      <Container maxWidth='sm'>
        <Box
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          gap={1}
        >
          {portfolioContent.mainContent.projects.filterButtons.map((button) => (
            <Button
              key={button.label}
              sx={{
                borderRadius: '2.3rem',
                border: tab === button.label ? 'none' : '1px solid green',
                '&:hover': {
                  backgroundColor:
                    tab === button.label
                      ? 'primary.main'
                      : 'rgba(0, 128, 0, 0.1)',
                  color: tab === button.label ? 'white' : 'primary.main',
                },
                backgroundColor:
                  tab === button.label ? 'primary.main' : 'transparent',
                color: tab === button.label ? 'white' : 'primary.main',
                minWidth: '5rem',
                height: '2.5rem',
                margin: '0.3rem',
                textAlign: 'center',
              }}
              onClick={() => setMyCards(button.label)}
              startIcon={<CategoryIcon category={button.label} />}
            >
              {t(`MAIN_CONTENT.PROJECTS.FILTER_BUTTONS.${button.label}`)}
            </Button>
          ))}
        </Box>
      </Container>

      <Container maxWidth='lg'>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent='center'
        >
          {filteredProjects.map((project) => (
            <Grid
              item
              key={project.id}
              xs={12}
              sm={6}
              md={4}
            >
              <PortfolioCard cardData={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Clients Logo */}
      <ClientLogo />
    </>
  );
};

export default CaseStudies;
