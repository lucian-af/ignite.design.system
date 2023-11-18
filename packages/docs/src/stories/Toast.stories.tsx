import { Toast, ToastProps } from '@laf.ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Title',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et incidunt omnis, eveniet illo, veritatis aliquam, a enim repellendus eaque ad aliquid facere inventore voluptatem officia commodi eum alias maxime architecto.',
  },
  argTypes: {
    open: {
      control: 'boolean',
      defaultValue: true,
    },
    hasClose: {
      control: 'boolean',
      defaultValue: true,
    },
    position: {
      options: ['left-top', 'left-bottom', 'right-top', 'right-bottom'],
      control: 'inline-radio',
      defaultValue: 'left-top',
    },
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
