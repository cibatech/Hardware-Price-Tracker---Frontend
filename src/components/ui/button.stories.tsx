import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button" 

export default {
  title: "Componentes/ui/button", 
  component: Button,
  argTypes: {
    variant: {
      control: "radio", 
      options: [
        "delete",
        "submit",
        "secondary",
        "rounded",
        "filter",
        "sponsor",
      ], 
      defaultValue: "delete", 
    },
    children: {
      control: "text", 
      defaultValue: "Clique aqui",
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    variant: "delete", 
    children: "Clique aqui", 
  },
}

export const SubmitButton: StoryObj = {
  args: {
    variant: "submit",
    children: "Enviar",
  },
}

export const SecondaryButton: StoryObj = {
  args: {
    variant: "secondary",
    children: "Cancelar",
  },
}

export const RoundedButton: StoryObj = {
  args: {
    variant: "rounded",
    children: "Ver Mais",
  },
}

export const FilterButton: StoryObj = {
  args: {
    variant: "filter",
    children: "Filtrar",
  },
}

export const SponsorButton: StoryObj = {
  args: {
    variant: "sponsor",
    children: "Patrocinar",
  },
}
