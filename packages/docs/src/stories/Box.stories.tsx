import { Box, BoxProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Esse é um elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
