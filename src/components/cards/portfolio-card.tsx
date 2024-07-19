import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PortfolioProjectType } from '@/types';

interface PortfolioCardProps {
  cardData: PortfolioProjectType;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ cardData }) => {
  const t = useTranslations(
    'PORTFOLIO_PAGE.MAIN_CONTENT.PROJECTS.PROJECT_INFORMATION'
  );

  return (
    <Box
      sx={{
        border: '0.5px solid #e0e0e0',
        borderRadius: '0.5rem',
        textAlign: 'center',
        width: '100%',
        margin: '2rem 0rem',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        cursor: 'pointer',
        '&:hover': {
          borderColor: 'primary.dark',
          bgcolor: '#fafffa',
        },
      }}
    >
      <Image
        src={cardData.portfolioImage}
        alt='portfolio-project'
        width={400}
        height={250}
        style={{
          cursor: 'pointer',
          width: '100%',
          height: 'auto',
        }}
      />

      <Box
        sx={{ padding: { xs: '0.9rem', sm: '0.75rem' }, marginTop: '0.5rem' }}
      >
        {/* Client's Logo */}
        <Box>
          <Image
            src={cardData.clientlogo}
            alt='client-logo'
            width={100}
            height={50}
          />
        </Box>
        {/* Title */}
        <Typography variant='h5'>{t(`${cardData.title}`)}</Typography>
        <Typography variant='body2'>{t(`${cardData.description}`)}</Typography>
        <Box
          sx={{
            marginTop: '1rem',
            paddingX: { xs: '0.25rem', sm: '0.5rem' },
          }}
        >
          <Divider />
          <Button
            variant='outlined'
            sx={{
              textTransform: 'none',
              borderRadius: '0.25rem',
              marginTop: '1rem',
            }}
          >
            {t(`${cardData.tag}`)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioCard;
