import { Meta, StoryObj } from "@storybook/react"
import { Header } from "./header"

export default {
  title: "Componentes/default-layout/header",
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta

export const Default: StoryObj = {}
