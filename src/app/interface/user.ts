export interface UserResponse {
  count: number
  results: User[]
}

export interface User {
  id: number
  nombre: string
  correo: string
  edad: number
}
