import { IUserModel } from 'shared/model'
import { fetchAPI } from '../network'

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
  signup(data: UserSignupApi): Promise<IUserModel>
  login(data: UserLoginApi): Promise<IUserModel>
  logout(): Promise<void>
}

export class _AuthorizationServiceImpl implements AuthorizationService {
  signup(data: UserSignupApi): Promise<IUserModel> {
    return fetchAPI.post('/auth/signup', data)
  }
  login(data: UserLoginApi): Promise<IUserModel> {
    return fetchAPI.post('/auth/login', data)
  }
  logout(): Promise<void> {
    return fetchAPI.post('/auth/logout', {})
  }
}

export const AuthService = new _AuthorizationServiceImpl()
