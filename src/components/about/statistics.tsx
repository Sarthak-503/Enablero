import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
  } from '@mui/material';
  import Image from 'next/image';
  import {StatisticsType} from '@/types';
  import { useTranslations } from 'next-intl';
  import { aboutContent } from '@/services/about-content';
  import svgImage from '../../../public/assets/svg/statistics.svg';
  type Statistics = {
    learnMoreText: string;
    heading: string;
    description: string;
    statsdetails:StatisticsType[];
  };
  

const Statistics : React.FC<Statistics> = ({ 
  learnMoreText,
  heading,
  description,
  statsdetails
})=> {
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
        width={100}
        height={100}
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
                {t(
                  `MAIN_CONTENT.STATS_SECTION.${learnMoreText}`
                )}
              </Typography>
              <Typography
                variant='h4'
                gutterBottom
              >
                {t(
                  `MAIN_CONTENT.STATS_SECTION.${heading}`
                )}
              </Typography>
              <Typography variant='body1'>
                {t(
                  `MAIN_CONTENT.STATS_SECTION.${description}`
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
