import React from "react";
import Angry from "./Angry";
import AngryNatural from "./AngryNatural";
import Default from "./Default";
import DefaultNatural from "./DefaultNatural";
import FrownNatural from "./FrownNatural";
import RaisedExcitedNatural from "./RaisedExcitedNatural";
import SadConcerned from "./SadConcerned";
import SadConcernedNatural from "./SadConcernedNatural";
import UnibrowNatural from "./UnibrowNatural";
import UpDown from "./UpDown";
import UpDownNatural from "./UpDownNatural";

export const eyebrowKindMap = {
  Angry: Angry,
  AngryNatural: AngryNatural,
  Default: Default,
  DefaultNatural: DefaultNatural,
  FrownNatural: FrownNatural,
  RaisedExcited: RaisedExcitedNatural,
  RaisedExcitedNatural: RaisedExcitedNatural,
  SadConcerned: SadConcerned,
  SadConcernedNatural: SadConcernedNatural,
  UnibrowNatural: UnibrowNatural,
  UpDown: UpDown,
  UpDownNatural: UpDownNatural,
} as const;
export const eyebrowList = Object.keys(eyebrowKindMap) as EyebrowType[];

export type EyebrowType = keyof typeof eyebrowKindMap;
export default function Eyebrow({type = "Default"}: {type?: EyebrowType}) {
  const EyebrowComponent = eyebrowKindMap[type]
  return <EyebrowComponent />
}