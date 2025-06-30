import React from 'react';
import { Container, Typography } from '@mui/material';
import PageEditor from '../components/PageEditor';
import PagesList from '../components/PagesList';
import ExportToPDF from '../components/ExportToPDF';
import ThemeSelector from '../components/ThemeSelector';

const Editor = () => {
  return (
    <Container
      className='flex flex-col justify-center items-center max-w-[100vw] gap-4'
      sx={{ my: 4 }}
    >
      <Typography
        variant='h2'
        sx={{
          color: '#50A379',
          fontWeight: 'bold',
          textShadow: '2.5px 8px 2px rgba(5, 61, 13, 0.15)',
          fontFamily: 'Inter, sans-serif',
        }}
        gutterBottom
      >
        Leaflet Editor
      </Typography>
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <PageEditor />
        </div>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <ThemeSelector />
          <PagesList />
          <ExportToPDF />
        </div>
      </div>
    </Container>
  );
};

export default Editor;
