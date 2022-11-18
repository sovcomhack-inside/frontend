import axios from 'axios'

class _ClientApi {
  baseUrl = 'http://127.0.0.1:8080/'

  public get(url: string) {
    return axios.get(`${this.baseUrl}${url}`)
  }

  public post(url: string, data: any) {
    console.log(`${this.baseUrl}${url}`, data)
    return axios.post(`${this.baseUrl}${url}`, data)
  }

  public put(url: string, data: any) {
    return axios.put(`${this.baseUrl}${url}`, data)
  }
}

export const ClientApi = new _ClientApi()
