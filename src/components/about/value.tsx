import React from 'react'
import Lottie from 'lottie-react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
interface RawValue {
  title: string;
  description: string;
  icon: string;
}
import ValueIcon from '@/components/common/value-icon';
import { aboutContent } from '@/services/about-content';
import { useTranslations } from 'next-intl';
const Value = () => {
  const t = useTranslations('ABOUT_US_PAGE');
  const values = aboutContent.mainSection.valueSection.values;
  return (
    <Box>
    <Container
    sx={{
      mt: 4,
      mb: 4,
      p: 2,
      alignItems: 'center',
    }}
  >
      <Typography variant='h2' align='center'>
        {t(
          `MAIN_CONTENT.VALUE_SECTION.${aboutContent.mainSection.valueSection.heading}`
        )}
      </Typography>
      <Typography variant='body1'  align='center'>
        {t(
          `MAIN_CONTENT.VALUE_SECTION.${aboutContent.mainSection.valueSection.description}`
        )}
      </Typography>

    <Box 
      sx={{mt:'2rem'}}             
    >
      {/* TODO Remove the hover gray color and make it like the testimonials card  */}
      {values.map((value, index) => (
        <Grid
          item
          xs={12}
          key={index}
          sx={{
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            m: '1rem',
            '&:hover': {
              borderColor: 'primary.dark',
              boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
              curser:'pointer'
            },
          }}
        >
          {/* <Card> */}
          {/* Box for Icon and Letter  */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'primary.light',
              width: '8rem',
              flexDirection: 'row',
              justifyContent: 'space-around',
              p: 2,
              maxHeight: '2',
              height: '100%',
              borderRadius: '0px 15px 12px 0px',
           
            }}
          >
            <Typography variant='body2'>
              {
              <ValueIcon value={value.label}/>
              }</Typography>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 'bold',
                marginRight: '1rem',
              }}
            >
              {t(
                `MAIN_CONTENT.VALUE_SECTION.VALUES.${value.title}`
              ).charAt(0)}
            </Typography>
          </Box>
          {/* Box For Title and Description  */}
          <Box sx={{ flex: 1, alignItems: 'center' }}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', marginRight: '2' }}
            >
              {t(`MAIN_CONTENT.VALUE_SECTION.VALUES.${value.title}`)}
            </Typography>
            <Typography
              sx={{
                variant: 'body1',
              }}
            >
              {t(
                `MAIN_CONTENT.VALUE_SECTION.VALUES.${value.description}`
              )}
            </Typography>
          </Box>
          {/* </Card> */}
        </Grid>
      ))}
    </Box>
  </Container>
  </Box>
  )
}
export default Value;
