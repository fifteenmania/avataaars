import React from 'react'
import Blank from './Blank';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';

export const accessoriesKindMap = {
  Blank: Blank,
  Kurt: Kurt,
  Prescription01: Prescription01,
  Prescription02: Prescription02,
  Round: Round,
  Sunglasses: Sunglasses,
  Wayfarers: Wayfarers,
} as const;

export const accessoriesList = Object.keys(accessoriesKindMap) as AccessoriesType[];

export type AccessoriesType = keyof typeof accessoriesKindMap;
export default function Accesories({ type = "Blank"}: { type?: AccessoriesType }) {
  const AccessoriesComponent = accessoriesKindMap[type]
  return <AccessoriesComponent />
}
