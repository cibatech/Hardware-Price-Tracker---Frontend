import { Meta, StoryObj } from "@storybook/react";
import { NavbarMobile } from "./navbar-mobile";

export default {
  title: "Componentes/default-layout/navbar-mobile",
  component: NavbarMobile,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

export const Default: StoryObj = {};
