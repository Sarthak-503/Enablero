'use client';
import { Container, Box, Card, CardContent, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { homeContent } from '@/services';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  // Using the translations
  const t = useTranslations('HOME_PAGE.CLIENT_TESTIMONIALS');

  // Item quantity according to the screen size
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth='lg'>
      <Box
        textAlign={'center'}
        mt={'5rem'}
      >
        <Typography
          fontWeight='bold'
          textAlign='center'
          gutterBottom
          variant='h4'
        >
          {t(homeContent.clientTestimonials.sectionTitle)}
        </Typography>
        <Typography
          variant='body1'
          paragraph
        >
          {t(homeContent.clientTestimonials.sectionSubtitle)}
        </Typography>

        <Carousel
          responsive={responsive}
          infinite
        >
          {homeContent.clientTestimonials.testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              p={2}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                  minHeight: '22.5rem',
                }}
              >
                <Image
                  src={testimonial.companyLogo}
                  alt={`${testimonial.name}'s company logo`}
                  width={100}
                  height={50}
                  quality={80}
                />
                <CardContent sx={{ textAlign: 'start', overflow: 'hidden' }}>
                  <Typography
                    color={'primary.dark'}
                    variant='h6'
                    mt={2}
                  >
                    {t(testimonial.name)}
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='subtitle2'
                  >
                    {t(testimonial.title)}
                  </Typography>
                  <Typography
                    variant='body2'
                    mt={2}
                    sx={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {t(testimonial.quote)}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
