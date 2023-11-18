import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps, ReactElement } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  children: ReactElement
  title: string
  content: string
  hasClose: boolean
  position: 'left-top' | 'left-bottom' | 'right-bottom' | 'right-top'
}

export const Toast = ({
  title,
  content,
  children,
  hasClose = true,
  position,
  ...props
}: ToastProps) => (
  <ToastPrimitive.Provider>
    <ToastRoot {...props} type="foreground">
      {title && <ToastTitle>{title}</ToastTitle>}
      <ToastDescription>{content}</ToastDescription>
      {children && (
        <ToastPrimitive.Action altText="" asChild>
          {children}
        </ToastPrimitive.Action>
      )}
      {hasClose && (
        <ToastClose aria-label="Close" asChild>
          <X size={20} />
        </ToastClose>
      )}
    </ToastRoot>

    <ToastViewport position={position} />
  </ToastPrimitive.Provider>
)
