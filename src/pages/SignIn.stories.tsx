import { SignIn } from './SignIn'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'


// global
export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Success Login!'
                    }))
                })
            ],
        },
    }
} as Meta


export const Default: StoryObj = {
    // play -> run tests
    // canvasElement -> where the element is in storybook
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        // useEvent -> to type anything in the form
        userEvent.type(canvas.getByPlaceholderText('Type Your Email'), 'marina@test.com')
        userEvent.type(canvas.getByPlaceholderText('*************'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Success Login!'))
        })


    }
}
