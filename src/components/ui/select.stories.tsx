import { Meta, StoryObj } from "@storybook/react";
import { ISelectProps, Select } from "./select";  // Importe o seu componente Select

// Defina algumas opções para o Select
const options = [
  { value: "loja", label: "Loja" },
  { value: "produto", label: "Produto" },
  { value: "cliente", label: "Cliente" },
];

export default {
  title: "Componentes/ui/select",
  component: Select,
  argTypes: {
    selected: {
      control: "text",
      defaultValue: "Escolha uma opção",
    },
    pagePagination: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    )),
    selected: "Escolha uma opção",
    defaultText: "Escolha uma opção",
  } as ISelectProps,
};

export const WithPagination: StoryObj = {
  args: {
    selected: "Loja",
    pagePagination: true,
    defaultText: "Escolha uma opção",
    children: options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    )),
  },
};
