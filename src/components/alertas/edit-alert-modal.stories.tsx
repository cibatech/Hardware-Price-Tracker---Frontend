import { Meta, StoryObj } from "@storybook/react";
import { EditValueModal } from "./edit-alert-modal";
import { AlertsProvider } from "@/contexts/alerts-context";

export default {
  title: "Componentes/alertas/edit-alert-value",
  component: EditValueModal,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
   decorators: [
      (Story) => {
        return <AlertsProvider>{Story()}</AlertsProvider>
      },
    ],
} as Meta;

export const Default: StoryObj = {};
