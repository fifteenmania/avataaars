import React from "react";
import { Color, skinColorMap, SkinColorString } from "./color";

function ColorMask({maskID, color}: {maskID: string, color: Color}) {
  return (
    <g
      id="Skin/👶🏽-03-Brown"
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform="translate(0.000000, 0.000000)" id="Color">
        <rect x="0" y="0" width="264" height="280" />
      </g>
    </g>
  )
}

export default function Skin({maskID, color="Light"} : {maskID: string, color?: SkinColorString} ) {
  return <ColorMask maskID={maskID} color={skinColorMap[color]} />
}
