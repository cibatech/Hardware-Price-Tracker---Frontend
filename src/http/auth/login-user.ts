"use server"

import { LoginFormData, LoginResponse } from "@/@types/auth"
import { api } from "@/services/api"
import { NextResponse } from "next/server"

export async function loginUser(
  loginFormData: LoginFormData
): Promise<LoginResponse> {
  try {
    const { data } = await api.patch("api/user/login", loginFormData)

    const response = NextResponse.redirect("/")
    response.cookies.set("userId", data.UserId, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: "/",
    })

    console.log("Usuário logado")
    console.log(data)

    return data
  } catch (error) {
    console.error("Erro ao logar o usuário:", error)
    throw new Error("Erro ao buscar as informações")
  }
}
