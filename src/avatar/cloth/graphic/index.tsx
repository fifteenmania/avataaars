import React from "react";
import Skull from "./Skull";
import SkullOutline from "./SkullOutline";
import Bat from "./Bat";
import Cumbia from "./Cumbia";
import Deer from "./Deer";
import Diamond from "./Diamond";
import Hola from "./Hola";
import Selena from "./Selena";
import Pizza from "./Pizza";
import Resist from "./Resist";
import Bear from "./Bear";

export const GraphicKind = [
  'Skull',
  'SkullOutline',
  'Bat',
  'Cumbia',
  'Deer',
  'Diamond',
  'Hola',
  'Selena',
  'Pizza',
  'Resist',
  'Bear',
] as const

export type GraphicType = typeof GraphicKind[number];

function selector(type: GraphicType, maskID: string) {
  switch (type) {
    case 'Skull':
      return <Skull maskID={maskID}/>;
    case 'SkullOutline':
      return <SkullOutline maskID={maskID}/>;
    case 'Bat':
      return <Bat maskID={maskID}/>;
    case 'Cumbia':
      return <Cumbia maskID={maskID}/>;
    case 'Deer':
      return <Deer maskID={maskID}/>;
    case 'Diamond':
      return <Diamond maskID={maskID}/>;
    case 'Hola':
      return <Hola maskID={maskID}/>;
    case 'Selena':
      return <Selena maskID={maskID}/>;
    case 'Pizza':
      return <Pizza maskID={maskID}/>;
    case 'Resist':
      return <Resist maskID={maskID}/>;
    case 'Bear':
      return <Bear maskID={maskID}/>;
    default:
      return null;
  }
}

export default function Graphic({type, maskID} : {type: GraphicType, maskID: string}) {
  return selector(type, maskID)
}