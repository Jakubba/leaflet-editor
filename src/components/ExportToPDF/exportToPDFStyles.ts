import type { CSSProperties } from 'react';
import {
  themeStyles,
  titleStyles,
  descriptionStyles,
  numberPageStyles,
  clipPaths,
} from '../../utils/themeStyles';

export const containerStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: '-9999px',
  backgroundColor: '#fff',
  width: '794px',
  padding: 20,
};

export type Theme = 'default' | 'oldschool' | 'red';

export const getPageStyle = (theme: Theme): CSSProperties => ({
  marginBottom: 20,
  borderBottom: '1px solid #ccc',
  ...(themeStyles[theme] ?? {}),
});

export const getTitleStyle = (theme: Theme): CSSProperties => titleStyles[theme] ?? {};

export const getDescriptionStyle = (theme: Theme): CSSProperties =>
  descriptionStyles[theme] ?? {};

export const getNumberPageStyle = (theme: Theme): CSSProperties =>
  numberPageStyles[theme] ?? {};

export const getImageStyle = (theme: Theme): CSSProperties => ({
  maxWidth: '100%',
  height: 'auto',
  marginTop: 10,
  objectFit: 'cover',
  borderRadius: 4,
  clipPath: clipPaths[theme] ?? 'none',
});
