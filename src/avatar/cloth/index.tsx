import React from 'react'
import { colorMap, ColorString } from '../color';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import CollarSweater from './CollarSweater';
import { GraphicType } from './graphic';
import GraphicShirt from './GraphicShirt';
import Hoodie from './Hoodie';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtVNeck from './ShirtVNeck';

export const clothKindMap = {
  BlazerShirt: BlazerShirt,
  BlazerSweater: BlazerSweater,
  CollarSweater: CollarSweater,
  GraphicShirt: GraphicShirt,
  Hoodie: Hoodie,
  Overall: Overall,
  ShirtCrewNeck: ShirtCrewNeck,
  ShirtScoopNeck: ShirtScoopNeck,
  ShirtVNeck: ShirtVNeck,
} as const;
export const clothList = Object.keys(clothKindMap) as ClothType[];

export type ClothType = keyof typeof clothKindMap;

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

export default function Cloth({type = "BlazerShirt", color = "Gray01", graphic = "Skull"} : 
  { type?: ClothType, color?: ColorString, graphic?: GraphicType }) {
  const ClothComponent = clothKindMap[type]
  return <ClothComponent color={color} graphic={graphic} />
}
