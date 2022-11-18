import { ClientApi } from 'shared/api'
import { SignupUserApi, User } from './types'

export class _AuthApi {
  signUp(data: SignupUserApi): Promise<User> {
    return ClientApi.post('/api/signup', data)
  }
}

export const AuthApi = new _AuthApi()
