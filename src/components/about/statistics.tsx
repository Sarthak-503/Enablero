import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { StatisticsType } from '@/types';
import { useTranslations } from 'next-intl';
import { aboutContent } from '@/services/about-content';
import svgImage from '../../../public/assets/svg/statistics.svg';
type Statistics = {
  learnMoreText: string;
  heading: string;
  description: string;
  statsdetails: StatisticsType[];
};

const Statistics: React.FC<Statistics> = ({
  learnMoreText,
  heading,
  description,
  statsdetails,
}) => {
  const t = useTranslations('ABOUT_US_PAGE');
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
          {/* <Image
        src={svgImage}
        alt='Statistics'
        // layout='fill'
        // objectFit='contain'
        width={100}
        height={100}
        // style={{
        //     width:'100%',
        //     height:'auto'
        // }}
      /> */}
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
                {statsdetails.map((stat, index) => (
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
                  {t(`MAIN_CONTENT.STATS_SECTION.${learnMoreText}`)}
                </Typography>
                <Typography
                  variant='h4'
                  gutterBottom
                >
                  {t(`MAIN_CONTENT.STATS_SECTION.${heading}`)}
                </Typography>
                <Typography variant='body1'>
                  {t(`MAIN_CONTENT.STATS_SECTION.${description}`)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Statistics;
