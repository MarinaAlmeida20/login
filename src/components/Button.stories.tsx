import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

// global
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button Component'
    },
    argTypes: {}
} as Meta<ButtonProps>


// variations
export const Default: StoryObj<ButtonProps> = {}
