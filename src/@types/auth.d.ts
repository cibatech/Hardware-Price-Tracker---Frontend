export type LoginResponse = {
  Description: string
  UserId: string
}

export type LoginFormData = {
  Email: string
  Password: string
}

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
  UserName: string
}