import React from 'react'
import { HairColorString } from '../../color'
import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'

export const facialHairKindMap = {
  BeardLight: BeardLight,
  BeardMajestic: BeardMajestic,
  BeardMedium: BeardMedium,
  Blank: Blank,
  MoustacheFancy: MoustacheFancy,
  MoustacheMagnum: MoustacheMagnum,
} as const;
export const facialHairList = Object.keys(facialHairKindMap) as FacialHairType[];
export type FacialHairType = keyof typeof facialHairKindMap;

export interface FacialHairProps {
}

export interface ColorableFacialHairProps extends FacialHairProps {
  color: HairColorString
}

export default function FacialHair({type="Blank", color="BrownDark"} : {type?: FacialHairType, color?: HairColorString}) {
  const FacialHairComponent = facialHairKindMap[type]
  return <FacialHairComponent color={color}/>
}
