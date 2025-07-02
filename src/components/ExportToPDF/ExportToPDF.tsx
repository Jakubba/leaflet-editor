import React, { useRef } from 'react';
import useStore from '../../store';
import { Button } from '@mui/material';
import PDFPage from './PDFPage';
import { containerStyle } from './exportToPDFStyles';
import { exportElementToPDF } from '../../utils/pdfUtils';

const ExportToPDF = () => {
  const pages = useStore((state) => state.pages);
  const theme = useStore((state) => state.theme);
  const exportRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!exportRef.current) return;
    await exportElementToPDF(exportRef.current);
  };

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleExport}
        sx={{
          mt: 2,
          backgroundColor: '#50A379',
          '&:hover': { backgroundColor: '#388e3c' },
        }}
      >
        Export to PDF
      </Button>

      <div ref={exportRef} style={containerStyle}>
        {pages.map((page, index) => (
          <PDFPage key={index} page={page} theme={theme} />
        ))}
      </div>
    </>
  );
};

export default ExportToPDF;
