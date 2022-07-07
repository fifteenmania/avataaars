# Avataaars2

React Compoent for avatar generator, forked from [Avataaars](https://github.com/fangpenlin/avataaars). While keeping back-compatibility, resolved some isses and add type safty on props. Works with React 18.0 and above.

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - No external dependencies
 - Scalable
 - Easy to use

## Changes from Avataaars

 - Removed external dependencies ( `lodash`, `prop-types` )
 - Refactored to use functional components
 - Removed usages of unsafe react methods
 - Added type safety on props - Intellisence available
 - Optimized to make GC work better

## Usage

```jsx
import * as React from 'react'
import Avatar from 'avataaars2'

export default function MyComponent() {
  return (
    <div>
      Your avatar:
      <Avatar
        avatarStyle='Circle'
        topType='LongHairMiaWallace'
        accessoriesType='Prescription02'
        hairColor='BrownDark'
        facialHairType='Blank'
        clotheType='Hoodie'
        clotheColor='PastelBlue'
        eyeType='Happy'
        eyebrowType='Default'
        mouthType='Smile'
        skinColor='Light'
      />
    </div>
  )
}
```
