import Lottie from 'lottie-react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';
import Mission from '@/animations/Mission.json';
import MissionImage from '../../assets/png/About-png/mission.jpg';
import Image from 'next/image';
type Mission = {
    heading:string;
    subHeading:string;
    description:string;
}
const MissionSection:React.FC<Mission> = ({
    heading,
    subHeading,
    description
}) => {
    const t = useTranslations('ABOUT_US_PAGE');
  return (
      <Box>
          <Container
            sx={{
              mt: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' }
            }}
          >
            <Typography
              variant='h2'
              align='center'
              sx={{
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                }
              }}
            >
              {t(
                `MAIN_CONTENT.MISSION_SECTION.${heading}`
              )}
            </Typography>
            <Typography
              variant='body2'
              align='center'
              sx={{
                fontSize: {
                  xs: '0.875rem',
                  sm: '1rem',
                  md: '1.125rem',
                  lg: '1.25rem',
                }
              }}
            >
              {t(
                `MAIN_CONTENT.MISSION_SECTION.${subHeading}`
              )}
            </Typography>
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
                  textAlign={{
                    xs: 'center',
                    sm: 'center',
                    md: 'start',
                    lg: 'start',
                  }} 
                >
                  {t(
                    `MAIN_CONTENT.MISSION_SECTION.${description}`
                  )}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {/* <Lottie
                  animationData={Mission}
                  style={{ width: '100%', height: '100%' }}
                /> */}
            <Image
            src={MissionImage}
            alt={'Vission Image'}
            width={500}
            height={400}
          />
              </Grid>
            </Grid>
          </Container>
        </Box> 
  )
}

export default MissionSection;
