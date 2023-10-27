import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucian-af.png',
    alt: 'Lucian AF',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFalback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
