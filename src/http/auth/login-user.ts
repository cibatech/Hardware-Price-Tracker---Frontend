"use server"

import { LoginFormData, LoginResponse } from "@/@types/auth"
import { api } from "@/services/api"
import { cookies } from "next/headers"

export async function loginUser(
  loginFormData: LoginFormData
): Promise<LoginResponse> {
  try {
    const { data } = await api.patch("api/user/login", loginFormData)
    const cookie = await cookies()
    cookie.set("userId", data.UserId)

    return data
  } catch (error) {
    throw new Error(`Erro ao logar usuário: ${error}`)
  }
}
