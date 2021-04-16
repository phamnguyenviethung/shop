import React from 'react';
import { Image } from '@chakra-ui/react';

const Logo = ({ src, desc, size }) => {
  return (
    <Image src={src ? src : '../../assets/logo.png'} alt={desc} w={size} h={size} />
  );
};

export default Logo;
