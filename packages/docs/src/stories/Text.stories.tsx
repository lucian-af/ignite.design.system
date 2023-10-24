import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque molestiae eligendi a officia sint repudiandae natus hic? Veniam a ab assumenda vel magni iure iste voluptatem ad distinctio itaque!',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Texto em Itálico',
    as: 'i',
  },
}
