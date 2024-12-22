"use server"

import { api } from "@/services/api"

export interface SendEmailForResetPasswordResponse {
  Description: string
  response: {
    Email: string
    UserName: string
  }
}

export async function sendEmailForResetPassword(
  email: string
): Promise<SendEmailForResetPasswordResponse> {
  try {
    const { data } = await api.get(`api/user/sendcode/${email}`)
    console.log("Email enviado!")
    return data
  } catch (error) {
    throw new Error(`Erro ao enviar code ${error}`)
  }
}
