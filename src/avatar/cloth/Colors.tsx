import React from "react";
import { Color, colorMap, ColorString } from "../color";

function ColorFill({maskID, color}: {maskID: string, color: Color}) {
  return <g
    id='Color/Palette/Gray-01'
    mask={`url(#${maskID})`}
    fillRule='evenodd'
    fill={color}>
    <rect id='🖍Color' x='0' y='0' width='264' height='110' />
  </g>
}

export default function Colors({maskID, color}: {maskID: string, color: ColorString}) {
  return <ColorFill maskID={maskID} color={colorMap[color]} />
}
