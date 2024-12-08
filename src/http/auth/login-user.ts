"use server"

import { api } from "@/services/api"
import { cookies } from "next/headers"

export type LoginResponse = {
  Description: string
  UserId: string
}

export type LoginFormData = {
  Email: string
  Password: string
}

export async function loginUser(
  loginFormData: LoginFormData
): Promise<LoginResponse> {
  try {
    const { data } = await api.patch("api/user/login", loginFormData)
    const cookie = await cookies()
    cookie.set("userId", data.UserId)
    console.log("Usário Logado")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar as infos")
  }
}
