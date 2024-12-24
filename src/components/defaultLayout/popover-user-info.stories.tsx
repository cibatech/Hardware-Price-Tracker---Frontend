import { Meta, StoryObj } from "@storybook/react"
import { PopoverUserInfo } from "./popover-user-info"

export default {
  title: "Componentes/default-layout/popover-user-info",
  component: PopoverUserInfo,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    userName: "Ismael Henrique",
    onLogout: () => console.log("Logout chamado no Storybook"),
    children: (
      <button className="bg-green-100 flex size-10 rounded-full text-green-700 text-sm justify-center items-center font-semibold">
        IH
      </button>
    ),
  },
} as Meta

export const Default: StoryObj = {}
