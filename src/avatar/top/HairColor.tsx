import React from 'react'
import { Color, hairColorMap, HairColorString } from '../color'

function ColorFill({color, maskID} : {color: Color, maskID: string}) {
  return (
    <g
      id='Skin/👶🏽-03-Brown'
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform='translate(0.000000, 0.000000) ' id='Color'>
        <rect x='0' y='0' width='264' height='280' />
      </g>
    </g>
  )
}

export default function HairColor({maskID, color="BrownDark"} : {maskID: string, color?: HairColorString}) {
  return <ColorFill color={hairColorMap[color]} maskID={maskID}/>
}
