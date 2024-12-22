import { api } from "@/services/api"

export interface ResetPasswordData {
  UserProvidedCode: string
  StoredCode: string
  Email: string
  Password: string
}

interface ResetPasswordResponse {
  Description: string
  NewPassword: string
  config: {
    Email: string
    UserProvidedCode: string
    StoredCode: string
    Password: string
  }
}

export async function resetPassword(
  resetPasswordData: ResetPasswordData
): Promise<ResetPasswordResponse> {
  try {
    const { data } = await api.put("/api/user/passbycode", resetPasswordData)
    console.log(data)
    return data
  } catch (error) {
    throw new Error(`Erro ao registrar usuário: ${error}`)
  }
}
