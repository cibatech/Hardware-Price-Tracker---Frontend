"use server"

import { cookies } from "next/headers"

export async function login(data: any) {
  const cookiesData = await cookies()
  cookiesData.set(data.userId)
}

export async function logout() {
  const cookiesData = await cookies()
  cookiesData.delete("userId")
}
