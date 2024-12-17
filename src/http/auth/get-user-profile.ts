"use server"

import { api } from "@/services/api"
// import { cookies } from "next/headers"

export interface GetUserProfileResponse {
  Description: string
  response: {
    Email: string
    UserName: string
  }
}

export async function getUserProfile(userId: string): Promise<GetUserProfileResponse> {
  try {
    // const cookie = await cookies()
    // const userId = cookie.get("userId")
    const { data } = await api.get(`api/user/profile/${userId}`)

    return data
  } catch (error) {
    throw new Error(`Erro ao carregar perfil: ${error}`)
  }
}
