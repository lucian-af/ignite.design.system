import { styled } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

export const ToastRoot = styled(ToastPrimitive.Root, {
  maxWidth: '360px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  color: '$gray200',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5',
  alignItems: 'flex-start',
  gap: '$1',
  lineHeight: '$base',
  position: 'relative',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  all: 'unset',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: '$2',
  right: '$3',
  cursor: 'pointer',
  lineHeight: 0,
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
  color: '$white',
  paddingRight: '$6',
  whiteSpace: 'nowrap',
  maxWidth: '340px',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray200',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  padding: '$6',
  margin: '0',
  zIndex: '999999',
  outline: 'none',

  variants: {
    position: {
      'left-top': {
        left: 20,
        top: 0,
      },
      'left-bottom': {
        left: 20,
        bottom: 0,
      },
      'right-top': {
        right: 20,
        top: 0,
      },
      'right-bottom': {
        right: 20,
        bottom: 0,
      },
    },
  },

  defaultVariants: {
    position: 'right-bottom',
  },
})
