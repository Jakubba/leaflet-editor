import React from 'react';

interface Props {
  src: string;
}

const ImagePreview: React.FC<Props> = ({ src }) => (
  <img
    src={src}
    alt='Podgląd'
    style={{ width: '100%', marginTop: 10, borderRadius: 4 }}
  />
);

export default ImagePreview;
