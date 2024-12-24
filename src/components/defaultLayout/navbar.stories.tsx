import { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./navbar"

export default {
  title: "Componentes/default-layout/navbar",
  component: Navbar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta

export const Default: StoryObj = {}
