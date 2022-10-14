import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

// global
export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Type your email address'
    },
    argTypes: {}
} as Meta<TextInputProps>


// variations
export const Default: StoryObj<TextInputProps> = {}

