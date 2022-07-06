import React from 'react'
import { colorMap, colorString } from '../color';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import CollarSweater from './CollarSweater';
import { GraphicKind, GraphicType } from './graphic';
import GraphicShirt from './GraphicShirt';
import Hoodie from './Hoodie';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtVNeck from './ShirtVNeck';

export const ClothKind = [
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

export type ClothType = typeof ClothKind[number];

function selector(type: ClothType, color: colorString, graphic: GraphicType) {
  switch (type) {
    case 'BlazerShirt':
      return <BlazerShirt />;
    case 'BlazerSweater':
      return <BlazerSweater />;
    case 'CollarSweater':
      return <CollarSweater color={color}/>;
    case 'GraphicShirt':
      return <GraphicShirt color={color} graphic={graphic}/>;
    case 'Hoodie':
      return <Hoodie color={color}/>;
    case 'Overall':
      return <Overall color={color}/>;
    case 'ShirtCrewNeck':
      return <ShirtCrewNeck color={color}/>;
    case 'ShirtScoopNeck':
      return <ShirtScoopNeck color={color}/>;
    case 'ShirtVNeck':
      return <ShirtVNeck color={color}/>;
    default:
      return null;
  }
}

const requiresColor = [
  'CollarSweater', 
  'GraphicShirt',
  'Hoodie', 
  'Overall', 
  'ShirtCrewNeck', 
  'ShirtScoopNeck'
] as const;

const requiresGraphics = [
  'GraphicShirt'
] as const;

export function getAvailableParams({type}: {type: ClothType}) {
  return {
    clothColor: (type in requiresColor) ? Object.keys(colorMap) : [],
    graphicType: (type in requiresGraphics) ? GraphicKind : [],
  } as const;
}

export default function Cloth({type = "BlazerShirt", color = "Gray01", graphic = "Skull"} : 
  { type?: ClothType, color?: colorString, graphic?: GraphicType }) {
  return selector(type, color, graphic);
}
