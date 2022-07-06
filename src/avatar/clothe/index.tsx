import React from 'react'
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';

export const ClotheKind = [
  'BlazerShirt',
  'BlazerSweater',
  'CollarSweater',
  'GraphicShirt',
  'Hoodie',
  'Overall',
  'ShirtCrewNeck',
  'ShirtScoopNeck',
  'ShirtVNeck',
] as const;

export type ClotheType = typeof ClotheKind[number]

function selector(type: ClotheType) {
  switch (type) {
    case 'BlazerShirt':
      return <BlazerShirt />;
    case 'BlazerSweater':
      return <BlazerSweater />;
    default:
      return null;
  }
}

export default function Clothe({type = "BlazerShirt"} : {type?: ClotheType}) {
  return selector(type);
}
