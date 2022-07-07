import React from 'react'
import { Color, hairColorMap, HairColorString } from '../../color'

function ColorFill({maskID, color}: {maskID: string, color: Color}) {
  return (
    <g
      id='Color/Hair/Brown'
      mask={`url(#${maskID})`}
      fill={color}
    >
      <g transform='translate(-32.000000, 0.000000)' id='Color'>
        <rect x='0' y='0' width='264' height='244' />
      </g>
    </g>
  )
}

export default function Colors({maskID, color="BrownDark"} : {maskID: string, color: HairColorString}) {
  return <ColorFill color={hairColorMap[color]} maskID={maskID}/>
}