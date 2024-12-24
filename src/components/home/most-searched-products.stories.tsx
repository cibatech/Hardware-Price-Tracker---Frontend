import { Meta, StoryObj } from "@storybook/react"
import { MostSearchedProducts } from "./most-searched-products"
import { MostSearchedProductProvider } from "@/contexts/most-searched-products-context"

export default {
  title: "Componentes/home/most-searched-produtcs",
  component: MostSearchedProducts,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <MostSearchedProductProvider>{Story()}</MostSearchedProductProvider>
      )
    },
  ],
} as Meta

export const Default: StoryObj = {}
