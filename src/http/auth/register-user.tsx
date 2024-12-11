import { RegisterData, RegisterResponse } from "@/@types/auth"
import { api } from "@/services/api"

export async function registerUser(
  registerData: RegisterData
): Promise<RegisterResponse> {
  try {
    const { data } = await api.post("/api/user/create", registerData)

    console.log("Usário registrado")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar as infos")
  }
}
