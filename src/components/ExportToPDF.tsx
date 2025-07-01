import React, { useRef } from 'react';
import useStore from '../store';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  themeStyles,
  titleStyles,
  descriptionStyles,
  numberPageStyles,
  clipPaths,
} from '../utils/themeStyles';

const ExportToPDF = () => {
  const pages = useStore((state) => state.pages);
  const theme = useStore((state) => state.theme);
  const exportRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    const element = exportRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('gazetka.pdf');
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

      <div
        ref={exportRef}
        style={{
          position: 'absolute',
          top: 0,
          left: '-9999px',
          backgroundColor: '#fff',
          width: '794px',
          padding: 20,
        }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            style={{
              marginBottom: 20,
              borderBottom: '1px solid #ccc',
              ...themeStyles[theme],
            }}
          >
            <h2 style={titleStyles[theme]}>{page.title}</h2>
            <p style={descriptionStyles[theme]}>{page.description}</p>
            {page.image && (
              <img
                src={page.image}
                alt='Zdjęcie'
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginTop: 10,
                  objectFit: 'cover',
                  borderRadius: 4,
                  clipPath: clipPaths[theme] || 'none',
                }}
              />
            )}
            <p style={numberPageStyles[theme]}>{page.pageNumber}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExportToPDF;
