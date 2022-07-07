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

export const graphicKindMap = {
  Skull: Skull,
  SkullOutline: SkullOutline,
  Bat: Bat,
  Cumbia: Cumbia,
  Deer: Deer,
  Diamond: Diamond,
  Hola: Hola,
  Selena: Selena,
  Pizza: Pizza,
  Resist: Resist,
  Bear: Bear,
} as const;
export const graphicList = Object.keys(graphicKindMap) as GraphicType[];

export type GraphicType = keyof typeof graphicKindMap;

export default function Graphic({type, maskID} : {type: GraphicType, maskID: string}) {
  const GraphicComponent = graphicKindMap[type]
  return <GraphicComponent maskID={maskID} />
}