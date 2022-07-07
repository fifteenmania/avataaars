import React from "react";
import Close from "./Close";
import Cry from "./Cry";
import Default from "./Default";
import Dizzy from "./Dizzy";
import EyeRoll from "./EyeRoll";
import Happy from "./Happy";
import Hearts from "./Hearts";
import Side from "./Side";
import Squint from "./Squint";
import Surprised from "./Surprised";
import Wink from "./Wink";
import WinkWacky from "./WinkWacky";

export const eyeKindMap = {
  Close: Close,
  Cry: Cry,
  Default: Default,
  Dizzy: Dizzy,
  EyeRoll: EyeRoll,
  Happy: Happy,
  Hearts: Hearts,
  Side: Side,
  Squint: Squint,
  Surprised: Surprised,
  Wink: Wink,
  WinkWacky: WinkWacky,
} as const;
export const eyeList = Object.keys(eyeKindMap) as EyeType[];

export type EyeType = keyof typeof eyeKindMap;

export default function Eye({ type = 'Default' }: { type?: EyeType }) {
  const EyeComponent = eyeKindMap[type];
  return <EyeComponent />;
}
