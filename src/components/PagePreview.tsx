import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import type { Page } from '../types';

interface PagePreviewProps {
  data: Page;
}

const PagePreview: React.FC<PagePreviewProps> = ({ data }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant='h5'>{data.title}</Typography>
      <Typography variant='body2'>{data.description}</Typography>
      <Typography variant='caption'>Strona: {data.pageNumber}</Typography>
      {data.image && (
        <img src={data.image} alt='Zdjęcie' style={{ width: '100%', marginTop: 10 }} />
      )}
    </CardContent>
  </Card>
);

export default PagePreview;
