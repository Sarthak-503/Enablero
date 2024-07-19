import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ServicesType } from '@/types';
import Image from 'next/image';

type ServicesCardType = {
  service: ServicesType;
  keyFeatureTitle: string;
};

const ServicesCard: React.FC<ServicesCardType> = ({
  service,
  keyFeatureTitle,
}) => {
  const t = useTranslations('SERVICE_PAGE');

  return (
    <Card
      sx={{
        cursor: 'pointer',
        border: '0.1rem solid white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '0.3rem',
        overflow: 'hidden',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.3s',
        minHeight: '22.5rem',
        '&:hover': {
          borderColor: 'primary.dark',

          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: 'start',
          overflow: 'hidden',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          display='flex'
          justifyContent={'center'}
          mt={2}
        >
          <Image
            src={service.icon}
            alt={service.title}
            width={100}
            height={100}
          />
        </Box>
        <Typography
          color={'primary.dark'}
          variant='h6'
          mt={4}
          textAlign='center'
        >
          {t(`SERVICE_SECTION.SERVICES.${service.title}`)}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          mt={2}
          px={2}
        >
          {t(`SERVICE_SECTION.SERVICES.${service.description}`)}
        </Typography>
        {service.keyFeatures && service.keyFeatures.length > 0 && (
          <Box
            mt={2}
            flexGrow={1}
          >
            <Typography
              variant='body2'
              color='primary.main'
              sx={{ fontWeight: 'bold' }}
              mt={2}
            >
              {t(`SERVICE_SECTION.SERVICES.${keyFeatureTitle}`)}
            </Typography>
            <ul style={{ paddingLeft: '1rem', textAlign: 'left' }}>
              {service.keyFeatures.map((feature, index) => (
                <li key={index}>
                  <Typography variant='body2'>
                    {t(`SERVICE_SECTION.SERVICES.${feature}`)}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
