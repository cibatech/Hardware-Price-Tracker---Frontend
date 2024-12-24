import { Meta, StoryObj } from "@storybook/react"
import { Banner, IBannerProps } from "./banner"
import kabumPicture from "../../assets/kabum-logo.svg"

export default {
  title: "Componentes/home/banner",
  component: Banner,
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    imageUrl: kabumPicture,
    store: "Kabum",
    text: "Kabum",
  } as IBannerProps,
}
