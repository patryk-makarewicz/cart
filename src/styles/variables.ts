import { pxToRem } from './helpers';

//----- z-index -----

export const zIndex = {
  loadingOnStart: 5,
  regulations: 4,
  header: 3,
  mobileMenu: 2,
  footer: 1
};

//----- Fonts -----

export const fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700
};

export const fontSize = {
  xs: `${pxToRem('12px')}`,
  s: `${pxToRem('14px')}`,
  m: `${pxToRem('16px')}`,
  l: `${pxToRem('18px')}`,
  xl: `${pxToRem('21px')}`,
  xll: `${pxToRem('36px')}`
};

//----- Line height -----

export const lineHeight = {
  s: '18px',
  m: '20px',
  l: '24px',
  xl: '30px',
  xll: '40px'
};

//----- Margins -----

export const margin = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xll: '40px'
};

//----- Paddings -----

export const padding = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xll: '40px'
};

//----- Breakpoints -----

export const breakpoint = {
  xs: '360px',
  s: '576px',
  m: '768px',
  l: '992px',
  xl: '1200px',
  xll: '1400px'
};

//----- Shadows -----

export const shadow = {
  first: '0 4px 12px rgba(0, 0, 0, 0.2)',
  second: '0px -2px 12px rgba(0, 0, 0, 0.2)'
};
