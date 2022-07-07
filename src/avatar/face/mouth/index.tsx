import React from "react";
import Concerned from "./Concerned";
import Default from "./Default";
import Disbelief from "./Disbelief";
import Eating from "./Eating";
import Grimace from "./Grimace";
import Sad from "./Sad";
import ScreamOpen from "./ScreamOpen";
import Serious from "./Serious";
import Smile from "./Smile";
import Tongue from "./Tongue";
import Twinkle from "./Twinkle";
import Vomit from "./Vomit";

export const mouthKindMap = {
  Concerned: Concerned,
  Default: Default,
  Disbelief: Disbelief,
  Eating: Eating,
  Grimace: Grimace,
  Sad: Sad,
  ScreamOpen: ScreamOpen,
  Serious: Serious,
  Smile: Smile,
  Tongue: Tongue,
  Twinkle: Twinkle,
  Vomit: Vomit,
} as const;
export const mouthList = Object.keys(mouthKindMap) as MouthType[];

export type MouthType = keyof typeof mouthKindMap;

export default function Mouth({type="Default"}: {type?: MouthType}) {
  const MouthComponent = mouthKindMap[type]
  return <MouthComponent />
}