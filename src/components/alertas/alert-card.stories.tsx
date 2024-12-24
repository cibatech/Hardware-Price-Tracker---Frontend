import { Meta, StoryObj } from "@storybook/react"
import { AlertCard } from "./alert-card"
import { AlertsProvider } from "@/contexts/alerts-context"

export default {
  title: "Componentes/alertas/alert-card",
  component: AlertCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    alertId: "12345",
    value: 1500,
    alertName:
      "Processador AMD Ryzen 7 5700X3D, 8-Core, 16-Threads, 3.0GHz (4.1GHz Turbo), Cache 100MB, AM4, 100-100001503WOF",
    alertImageUrl:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.pichau.com.br%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F2f958555330323e505eba7ce930bdf27%2F1%2F0%2F100-100001503wof.jpg&w=256&q=75",
  },
  decorators: [
    (Story) => {
      return <AlertsProvider>{Story()}</AlertsProvider>
    },
  ],
} as Meta

export const Default: StoryObj = {}
