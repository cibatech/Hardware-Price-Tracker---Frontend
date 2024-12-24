import { Meta, StoryObj } from "@storybook/react"
import { EmptyProducts } from "./empties"

export default {
  title: "Componentes/home/empties", 
  component: EmptyProducts,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["search", "view"], 
      },
      defaultValue: "search", 
    },
  },
} as Meta

export const Default: StoryObj = {}
