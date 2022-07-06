type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

type ColorMapType = {[key in string]: Color};

export const colorMap = {
  'Black': '#262E33',
  'Blue01': '#65C9FF',
  'Blue02': '#5199E4',
  'Blue03': '#25557C',
  'Gray01': '#E6E6E6',
  'Gray02': '#929598',
  'Heather': '#3C4F5C',
  'PastelBlue': '#B1E2FF',
  'PastelGreen': '#A7FFC4',
  'PastelOrange': '#FFDEB5',
  'PastelRed': '#FFAFB9',
  'PastelYellow': '#FFFFB1',
  'Pink': '#FF488E',
  'Red': '#FF5C5C',
  'White': '#FFFFFF'
} as const;

export type colorString = keyof typeof colorMap;