import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    Card,
    useTheme,
  } from '@mui/material';
  import Image from 'next/image';
  import { useTranslations } from 'next-intl';
  import { aboutContent } from '@/services/about-content';
  import svgImage from '../../../public/assets/svg/statistics.svg';
  type Statistics = {
    mainHeading: string;
    subHeading: string;
    description: string;
    subDescription: string;
  };
  

const Statistics =  () => {
    const t = useTranslations('ABOUT_US_PAGE');
  const stats = aboutContent.mainSection.statsSection.statistics;
  return (
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
        {/* public\assets\svg\statistics.svg */}
            {/* <Image
            src={'/assets/svg/statistics.svg'}
            alt='Statistics'
            sx={{
                width:'100%',
                height:'auto'
            }}
          /> */}
           {/* <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}> */}
      <Image
        src={svgImage}
        alt='Statistics'
        // layout='fill'
        // objectFit='contain'
        width={1800}
        height={1000}
        // style={{
        //     width:'100%',
        //     height:'auto'
        // }}
      />
    {/* </Box> */}
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
  )
}

export default Statistics;
