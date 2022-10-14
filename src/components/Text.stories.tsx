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
export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}