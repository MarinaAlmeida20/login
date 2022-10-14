import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

// global
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Hello Again'
    }
} as Meta<TextProps>


// variations
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

// Comp = radix
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    }
}