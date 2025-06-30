import React, { useState, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-leaft.png';
import point from '../assets/logo-point.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className='flex flex-col items-center justify-center h-screen bg-[#E5F8F6]'>
      <div className='h-auto w-full max-w-md flex flex-col items-center justify-center mb-8'>
        <img src={logo} alt='Logo' className='w-full h-[350px] object-contain' />
        <div className='flex items-center justify-center mt-4'>
          <img
            src={point}
            alt='Point logo'
            className='w-[50px] h-[50px] object-contain'
          />
          <h1 className='text-3xl font-bold text-gray-600'>Leaflet Editor</h1>
        </div>
      </div>

      <Button
        variant='contained'
        sx={{
          backgroundColor: '#50A379',
          fontSize: '1.5rem',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        }}
        onClick={() => navigate('/editor')}
      >
        Start
      </Button>
    </Container>
  );
};

export default Home;
