# Avataaars2

React Compoent for avatar generator, forked from [Avataaars](https://github.com/fangpenlin/avataaars). While keeping back-compatibility, resolved some isses and add type safty on props. Works with React \^18.0.

<p align="center"><img src='image/avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

  - SVG based
  - Light weight 
  - No external dependencies
  - Scalable
  - Easy to use

## Usage

### Avatar Component
Choose the avatar settings as you like. With typescript, it will show type hints for each parts. 

```tsx
import React from 'react'
import Avatar from 'avataaars2'

export default function AvatarWrapper() {
  return (
    <div>
      Your avatar:
      <Avatar
        avatarStyle='Circle'
        backgroundColor='Blue01'
        topType='LongHairMiaWallace'
        accessoriesType='Prescription02'
        hairColor='BrownDark'
        facialHairType='Blank'
        clothType='Hoodie'
        clothColor='PastelBlue'
        eyeType='Happy'
        eyebrowType='Default'
        mouthType='Smile'
        skinColor='Light'
      />
    </div>
  )
}
```

### Generating Random Avatar

Availabale parts are listed in `topList`, `accessoriesList`, `facialHairList`, `clothList`, `graphicList`, `eyeList`, `eyebrowList`, and `mouthList`. You may define a custom hook to generate random avatar settings.

```tsx
function getRandomAvatarSetting(): AvatarProps {
  return {
    avatarStyle: "Circle",
    backgroundColor: "Blue01",
    topType: randomSampleOne(topList),
    accessoriesType: randomSampleOne(accessoriesList),
    graphicType: randomSampleOne(graphicList),
    hairColor: randomSampleOne(hairColorStringList),
    facialHairType: randomSampleOne(facialHairList),
    clothType: randomSampleOne(clothList),
    clothColor: randomSampleOne(colorStringList),
    eyeType: randomSampleOne(eyeList),
    eyebrowType: randomSampleOne(eyebrowList),
    mouthType: randomSampleOne(mouthList),
    skinColor: randomSampleOne(skinColorStringList)
  }
}
```

## Changes from Avataaars

### New Features
  - Background color customization
  - Exported available parts list

### Code Quality
  - Removed external dependencies ( `lodash`, `prop-types` )
  - Removed usages of legacy react methods
  - Type safety on props - Intellisence available
  - Refactored to use functional components

### Optimization
  - Optimized to make GC work better
  - \~7\% Bundle size reduced. Benchmarked with `source-map-explorer`. 
    - `avataaars` webpack + Terser plugin (standard CRA Build): 433KB
    - `avataaars2` webpack + Terser plugin (standard CRA Build): 404KB
<p align="center"><img src='image/bundle-benchmark.png?raw=true' style='width: 800px; height: 570px;' /></p>
