import { Text, TextProps } from '@laf.ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque molestiae eligendi a officia sint repudiandae natus hic? Veniam a ab assumenda vel magni iure iste voluptatem ad distinctio itaque!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    as: {
      options: ['label', 'p', 'span', 'i', 'strong', 'small'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Texto em Itálico',
    as: 'i',
  },
}
