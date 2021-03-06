import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Following } from "./Following"
import { handlers } from "api/mocks"

export default {
  title: "Profiles / Following",
  component: Following,
} as ComponentMeta<typeof Following>

const Template: ComponentStory<typeof Following> = (args) => <Following {...args} />

export const Success = Template.bind({})
Success.parameters = { msw: handlers.success }

export const Loading = Template.bind({})
Loading.parameters = { msw: handlers.loading }

export const Error = Template.bind({})
Error.parameters = { msw: handlers.error }

export const NoData = Template.bind({})
NoData.parameters = { msw: handlers.noData }
