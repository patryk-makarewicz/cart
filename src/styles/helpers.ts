import { rem } from 'polished';

const baseFontSize = 16;

export const pxToRem = (fontSize: number | string) => rem(fontSize, baseFontSize);
