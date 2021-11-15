import { styled } from '@mui/material';
import React from 'react';

export interface HeroProps {
  src: string;
}

const Background = styled('div')(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  position: 'relative',
}));

const BgImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  mixBlendMode: 'luminosity',
  opacity: 0.15,
  zIndex: 0,
}));

const Hero: React.FC<HeroProps> = ({ children, src }) => (
  <Background>
    <BgImage src={src} />
    {children}
  </Background>
);

export default Hero;