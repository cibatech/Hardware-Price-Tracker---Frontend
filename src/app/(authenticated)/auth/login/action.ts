"use server"

import { cookies } from "next/headers"

export async function logout() {
  const cookiesData = await cookies()
  cookiesData.delete("userId")
}
