import React, { ReactNode } from 'react'
import { ColorString, HairColorString } from '../color'
import { AccessoriesType } from './accessories'
import { FacialHairType } from './facialHair'
import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'

export const topKindMap = {
  Eyepatch: Eyepatch,
  Hat: Hat,
  Hijab: Hijab,
  LongHairBigHair: LongHairBigHair,
  LongHairBob: LongHairBob,
  LongHairBun: LongHairBun,
  LongHairCurly: LongHairCurly,
  LongHairCurvy: LongHairCurvy,
  LongHairDreads: LongHairDreads,
  LongHairFrida: LongHairFrida,
  LongHairFro: LongHairFro,
  LongHairFroBand: LongHairFroBand,
  LongHairMiaWallace: LongHairMiaWallace,
  LongHairNotTooLong: LongHairNotTooLong,
  LongHairShavedSides: LongHairShavedSides,
  LongHairStraight: LongHairStraight,
  LongHairStraight2: LongHairStraight2,
  LongHairStraightStrand: LongHairStraightStrand,
  NoHair: NoHair,
  ShortHairDreads01: ShortHairDreads01,
  ShortHairDreads02: ShortHairDreads02,
  ShortHairFrizzle: ShortHairFrizzle,
  ShortHairShaggyMullet: ShortHairShaggyMullet,
  ShortHairShortCurly: ShortHairShortCurly,
  ShortHairShortFlat: ShortHairShortFlat,
  ShortHairShortRound: ShortHairShortRound,
  ShortHairShortWaved: ShortHairShortWaved,
  ShortHairSides: ShortHairSides,
  ShortHairTheCaesar: ShortHairTheCaesar,
  ShortHairTheCaesarSidePart: ShortHairTheCaesarSidePart,
  Turban: Turban,
  WinterHat1: WinterHat1,
  WinterHat2: WinterHat2,
  WinterHat3: WinterHat3,
  WinterHat4: WinterHat4,
} as const;
export const topList = Object.keys(topKindMap) as TopType[];

export type TopType = keyof typeof topKindMap;
export interface TopProps {
  children?: ReactNode 
}
export interface HairProps extends TopProps {
  haircolor?: HairColorString
}
export interface Colorable extends TopProps {
  color?: ColorString
}

export default function Top({type="LongHairStraight", haircolor, color, children} : 
  {
    type?: TopType,
    haircolor?: HairColorString,
    color?: ColorString,
    children?: ReactNode
  }) {
  const Component = topKindMap[type];
  return <Component color={color} haircolor={haircolor}>{children}</Component>
}
