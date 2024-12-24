import { Meta, StoryObj } from "@storybook/react"
import { RecentlyViewedProducts } from "./recently-viewed-products"
import { RecentkyViwedProductsProvider } from "@/contexts/recently-viewed-products-list-context"

export default {
  title: "Componentes/home/rencently-viewed-products",
  component: RecentlyViewedProducts,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <RecentkyViwedProductsProvider>{Story()}</RecentkyViwedProductsProvider>
      )
    },
  ],
} as Meta

export const Default: StoryObj = {}
