import React from 'react';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo-leaft.png';
import point from '../assets/logo-point.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className='flex flex-col items-center justify-center h-screen bg-[#E5F8F6] overflow-hidden'>
      <motion.img
        src={logo}
        alt='Logo'
        className='w-full h-[350px] max-w-md object-contain mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='flex items-center justify-center mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img
          src={point}
          alt='Point logo'
          className='w-[50px] h-[50px] object-contain mr-2 z-10'
        />
        <motion.h1
          className='text-3xl font-bold text-gray-600'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Leaflet Editor
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <Button
          variant='contained'
          sx={{
            my: 4,
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
      </motion.div>
    </Container>
  );
};

export default Home;
