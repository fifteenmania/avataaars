import React from "react"
import Eye, { EyeType } from "./eye"
import Eyebrow, { EyebrowType } from "./eyebrow"
import Mouth, { MouthType } from "./mouth"
import Nose from "./nose"

export default function Face({mouthType, eyeType, eyebrowType}: 
  {mouthType?: MouthType, eyeType?: EyeType, eyebrowType?: EyebrowType}) {
  return <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
    <Mouth type={mouthType}/>
    <Nose/>
    <Eye type={eyeType}/>
    <Eyebrow type={eyebrowType}/>
  </g>
}