import { Box, Text, TextArea, TextAreaProps } from '@laf.ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            width: '450px',
          }}
        >
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite aqui ...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
