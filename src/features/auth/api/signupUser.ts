import { fetchAPI } from 'shared/api/network'

export type SignupUserRequest = {
  email: string
  firstName: string
  lastName: string
  password: string
}

export const signupUser = (dto: SignupUserRequest) =>
  fetchAPI.post('http://127.0.0.1:8080/api/auth/signup', dto)
