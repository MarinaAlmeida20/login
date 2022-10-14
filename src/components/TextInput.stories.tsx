import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

// global
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your email address' />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>


// variations
export const Default: StoryObj<TextInputRootProps> = {}

export const withOutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your email address' />
    }
}