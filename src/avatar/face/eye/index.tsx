import React from "react";

export const EyeType = [
  'Close',
  'Cry',
  'Default',
  'Dizzy',
  'EyeRoll',
  'Happy',
  'Hearts',
  'Side',
  'Squint',
  'Surprised',
  'Wink',
  'WinkWacky',
] as const;

export type EyeType = typeof EyeType[number];

export default function Eye({ type = 'Default' }: { type?: EyeType }) {
  return <></>
}