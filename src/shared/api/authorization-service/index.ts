import { fetchAPI } from '../network'

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  image: string
  accountId: string
}
export interface UserSignupApi {
  email: string
  firstName: string
  lastName: string
  password: string
}

export interface UserLoginApi {
  email: string
  password: string
}

export interface AuthorizationService {
  signup(data: UserSignupApi): Promise<User>
  login(data: UserLoginApi): Promise<User>
  logout(): Promise<void>
}

export class _AuthorizationServiceImpl implements AuthorizationService {
  signup(data: UserSignupApi): Promise<User> {
    return fetchAPI.post('/auth/signup', data)
  }
  login(data: UserLoginApi): Promise<User> {
    return fetchAPI.post('/auth/login', data)
  }
  logout(): Promise<void> {
    return fetchAPI.delete('/auth/logout', {})
  }
  getUser(): Promise<User> {
    return fetchAPI.get('/user/get', {})
  }
}

export const AuthService = new _AuthorizationServiceImpl()
