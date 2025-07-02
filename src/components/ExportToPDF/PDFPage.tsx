import React from 'react';
import type { Theme } from './exportToPDFStyles';
import type { Page } from '../../types';

interface PDFPageProps {
  page: Page;
  theme: Theme;
}
import {
  getPageStyle,
  getTitleStyle,
  getDescriptionStyle,
  getNumberPageStyle,
  getImageStyle,
} from './exportToPDFStyles';

const PDFPage: React.FC<PDFPageProps> = ({ page, theme }) => (
  <div style={getPageStyle(theme)}>
    <h2 style={getTitleStyle(theme)}>{page.title}</h2>
    <p style={getDescriptionStyle(theme)}>{page.description}</p>
    {page.image && <img src={page.image} alt='Zdjęcie' style={getImageStyle(theme)} />}
    <p style={getNumberPageStyle(theme)}>{page.pageNumber}</p>
  </div>
);

export default PDFPage;
