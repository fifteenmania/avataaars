import React from "react";

export const MouthKind = [
  'Concerned',
  'Default',
  'Disbelief',
  'Eating',
  'Grimace',
  'Sad',
  'ScreamOpen',
  'Serious',
  'Smile',
  'Tongue',
  'Twinkle',
  'Vomit',
] as const;

export type MouthType = typeof MouthKind[number];

function selector(type: MouthType) {
  switch (type) {

  }
  return <></>
}


export default function Mouth({type="Default"}: {type?: MouthType}) {
  return selector(type);
}