import React from "react";

export const EyebrowType = [
  'Angry',
  'AngryNatural',
  'Default',
  'DefaultNatural',
  'FlatNatural',
  'RaisedExcited',
  'RaisedExcitedNatural',
  'SadConcerned',
  'SadConcernedNatural',
  'UnibrowNatural',
  'UpDown',
  'UpDownNatural',
] as const;

export type EyebrowType = typeof EyebrowType[number];

function selector(type: EyebrowType) {
  switch(type) {

  }
  return <></>;
}

export default function Eyebrow({type = "Default"}: {type?: EyebrowType}) {
  return selector(type);
}