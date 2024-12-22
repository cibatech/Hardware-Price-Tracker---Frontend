import { ChartConfig } from "@/components/shadcn-ui/ui/chart"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#22c55e",
  },
} satisfies ChartConfig
