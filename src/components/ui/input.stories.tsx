import { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"

export default {
  title: "Componentes/ui/input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["outline", "minimalist"],
      },
      defaultValue: "outline",
    },
    value: {
      control: "text",
      defaultValue: "",
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    variant: "outline",
    value: "Texto padrão",
  },
}

export const Minimalist: StoryObj = {
  args: {
    variant: "minimalist",
    value: "Texto no estilo minimalist",
  },
}
