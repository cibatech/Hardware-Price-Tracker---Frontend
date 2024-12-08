import { api } from "@/services/api"

export type RegisterResponse = {
  Description: string
  data: {
    Id: string
    Email: string
    Password: string
  }
}

export type RegisterData = {
  Email: string
  Password: string
}

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
