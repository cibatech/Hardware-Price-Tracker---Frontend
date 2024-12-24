import { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbDemo } from "./breadcumb"

export default {
  title: "Componentes/ui/breadcrumb",
  component: BreadcrumbDemo,
  argTypes: {
    isProductPage: {
      control: "boolean",
      defaultValue: true,
    },
    productTitle: {
      control: "text",
      defaultValue: "Nome do Produto",
    },
    produtId: {
      control: "text",
      defaultValue: "123",
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    isProductPage: true,
    productTitle: "Produto Exemplo",
    produtId: "123",
  },
}

export const WithoutProductPage: StoryObj = {
  args: {
    isProductPage: false,
  },
}
