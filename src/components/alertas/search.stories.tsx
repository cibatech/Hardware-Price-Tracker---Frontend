import { Meta, StoryObj } from "@storybook/react";
import { SearchAlerts } from "./search";

export default {
  title: "Componentes/alertas/search",
  component: SearchAlerts,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

export const Default: StoryObj = {};
