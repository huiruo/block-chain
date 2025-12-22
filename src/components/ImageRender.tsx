import React from 'react';

interface Props {
  path: string
  alt: string;
  width?: string
  height?: string
}

const ImageRender: React.FC<Props> = ({ path, alt, width = '80%', height = 'auto' }) => {
  return <div className='img-box img-box-t'>
    <img alt={alt} src={path} style={{ width: 'auto',maxWidth: width, height }} className='render-img' />
  </div>
};

export default ImageRender;