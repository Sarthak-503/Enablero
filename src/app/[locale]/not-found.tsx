'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import NotFoundAnimation from '@/animations/NotFoundAnimation.json';
import Lottie from 'lottie-react';

const NotFound = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      textAlign='center'
    >
      <Box
        width='300px'
        mb={2}
      >
        <Lottie animationData={NotFoundAnimation} />
      </Box>
      <Typography
        variant='h3'
        gutterBottom
      >
        Oops! Page Not Found
      </Typography>
      <Typography
        variant='subtitle1'
        gutterBottom
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button
        variant='contained'
        href='/'
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
