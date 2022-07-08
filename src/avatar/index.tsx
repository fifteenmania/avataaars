import React, { useId } from 'react'
import Cloth, { ClothType } from './cloth'
import Face from './face'
import { GraphicType } from './cloth/graphic'
import { colorMap, ColorString, HairColorString, SkinColorString } from './color'
import { EyeType } from './face/eye'
import { EyebrowType } from './face/eyebrow'
import { MouthType } from './face/mouth'
import Skin from './Skin'
import FacialHair, { FacialHairType } from './top/facialHair'
import Accesories, { AccessoriesType } from './top/accessories'
import Top, { TopType } from './top'

export interface AvatarProps {
  backgroundColor?: ColorString
  topType?: TopType
  accessoriesType?: AccessoriesType
  hatColor?: ColorString
  hairColor?: HairColorString
  facialHairType?: FacialHairType
  facialHairColor?: HairColorString
  clothType?: ClothType
  clothColor?: ColorString
  graphicType?: GraphicType
  eyeType?: EyeType
  eyebrowType?: EyebrowType
  mouthType?: MouthType
  skinColor?: SkinColorString
  avatarStyle: AvatarStyleType
}

// background style
export const avatarStyleKind = [
  'Circle',
  'Transparent'
] as const 

export type AvatarStyleType = typeof avatarStyleKind[number]

type SvgProps = Omit<React.SVGAttributes<SVGSVGElement>, 
        'viewBox'|'version'|'xmlns'|'xmlnsXlink'>

function BackgroundFill({color, mask1, path1} : {color: ColorString, mask1: string, path1: string}) {
  return <g
    id="Circle"
    strokeWidth="1"
    fillRule="evenodd"
    transform="translate(12.000000, 40.000000)">
    <mask id={mask1} fill="white">
      <use xlinkHref={'#' + path1} />
    </mask>
    <use
      id="Circle-Background"
      fill="#E6E6E6"
      xlinkHref={'#' + path1}
    />
    <g
      id="Color/Palette/Blue-01"
      mask={'url(#' + mask1 + ')'}
      fill={colorMap[color]}>
      <rect id="🖍Color" x="0" y="0" width="240" height="240" />
    </g>
  </g>
}

export default function Avatar(props : AvatarProps & SvgProps) {
  const {
    backgroundColor = "Blue01",
    topType,
    accessoriesType,
    hatColor,
    hairColor,
    facialHairType,
    facialHairColor,
    clothType,
    clothColor,
    graphicType,
    eyeType,
    eyebrowType,
    mouthType,
    skinColor,
    avatarStyle,
    ...rest
  } = props;
  const circle = props.avatarStyle === 'Circle'
  const path1 = useId()
  const path2 = useId()
  const path3 = useId()
  const mask1 = useId()
  const mask2 = useId()
  const mask3 = useId()
  return <svg 
    {...rest}
    viewBox="0 0 264 280"
    role={props.role??"img"}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with getavataaars.com</desc>
    <defs>
      <circle id={path1} cx="120" cy="120" r="120" />
      <path
        d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
        id={path2}
      />
      <path
        d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
        id={path3}
      />
    </defs>
    <g
      id="Avataaar"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd">
      <g
        transform="translate(-825.000000, -1100.000000)"
        id="Avataaar/Circle">
        <g transform="translate(825.000000, 1100.000000)">
          {circle ? (
            <BackgroundFill color={backgroundColor} mask1={mask1} path1={path1} />
          ) : null}
          {circle ? (
            <mask id={mask2} fill="white">
              <use xlinkHref={'#' + path2} />
            </mask>
          ) : null}
          <g id="Mask" />
          <g
            id="Avataaar"
            strokeWidth="1"
            fillRule="evenodd"
            mask={'url(#' + mask2 + ')'}>
            <g id="Body" transform="translate(32.000000, 36.000000)">
              <mask id={mask3} fill="white">
                <use xlinkHref={'#' + path3} />
              </mask>
              <use fill="#D0C6AC" xlinkHref={'#' + path3} />
              <Skin maskID={mask3} color={props.skinColor} />
              <path
                d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
                id="Neck-Shadow"
                fillOpacity="0.100000001"
                fill="#000000"
                mask={'url(#' + mask3 + ')'}
              />
            </g>
            <Cloth type={clothType} color={clothColor} graphic={graphicType}/>
            <Face eyeType={eyeType} eyebrowType={eyebrowType} mouthType={mouthType}/>
            <Top type={topType} haircolor={hairColor} color={hatColor}>
              <FacialHair type={facialHairType} color={facialHairColor}/>
              <Accesories type={accessoriesType}/>
            </Top>
          </g>
        </g>
      </g>
    </g>
  </svg>
}
