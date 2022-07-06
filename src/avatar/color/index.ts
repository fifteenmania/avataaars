type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

type ColorMapType = {[key in string]: Color};

export const colorMap: ColorMapType = {
  'Auburn': '#A94442'
} as const;
