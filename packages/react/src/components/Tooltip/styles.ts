import { keyframes, styled } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const slideLeftUpAndFade = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideRightDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(-100%)',
  },
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  lineHeight: '$short',
  width: '100%',
  maxWidth: '200px',
  padding: '$3 $4',
  borderRadius: '$xs',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow: '4px 16px 24px 0 rgba(0, 0, 0, 0.25)',

  userSelect: 'none',

  '&:[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideRightDownAndFade} 400ms ease-out`,
  },

  '&:[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftUpAndFade} 400ms ease-out`,
  },

  '&:[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideLeftUpAndFade} 400ms ease-out`,
  },

  '&:[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightDownAndFade} 400ms ease-out`,
  },
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  height: '$2',
  width: '$5',
})
