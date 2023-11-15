import { Box, Button, Tooltip, TooltipProps } from '@laf.ui/react'
import type { StoryObj, Meta } from '@storybook/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            width: 'fit-content',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Button size={'sm'} css={{ minWidth: '32px' }}>
        <PlusCircle size={22} />
      </Button>
    ),
    content: 'Isso é um tooltip',
  },
}
