import { RegisterData, RegisterResponse } from "@/@types/user"
import { api } from "@/services/api"

export async function registerUser(
  registerData: RegisterData
): Promise<RegisterResponse> {
  try {
    const { data } = await api.post("/api/user/create", registerData)

    return data
  } catch (error) {
    throw new Error(`Erro ao registrar usuário: ${error}`)
  }
}
