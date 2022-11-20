export type BasicResponse = {}

export const httpStatus = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  Conflict: 409,
  InternalServerError: 500,
}

export const BASE_URL = '/api/v1'

export const httpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const defaultOptions: RequestInit = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const headers = {
  csrf: 'X-CSRF-Token',
}

export const withQuery = (url: string, dto: object = {}) => {
  const data = Object.entries(dto)
    .map(([key, value]) => [key, String(value)])
    .filter(([, value]) => value.length > 0)
  if (data.length > 0) {
    const query = data.map(([key, value]) => `${key}=${value}`).join('&')
    const prefix = url.includes('?') ? '&' : '?'
    return url + prefix + query
  }
  return url
}

const withCSRFToken = (url: string, token: string) =>
  withQuery(url, { [headers.csrf]: token })

const getCookieValue = (name: string) =>
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''

export const decodeEntity = (str: string) => {
  const doc = new DOMParser().parseFromString(str, 'text/html')
  return doc.documentElement.textContent
}

const walkJSON = (json: any): void => {
  if (json) {
    Object.entries(json).forEach(([key, value]) => {
      if (typeof value === 'object') {
        decodeJSON(value)
      } else if (typeof value === 'string') {
        json[key] = decodeEntity(value)
      }
    })
  }
}

const decodeJSON = (json: any): any => {
  walkJSON(json)
  return json
}

const http = async <T>(url: string, config: RequestInit): Promise<T> => {
  const csrfToken = getCookieValue(headers.csrf)
  const request = new Request(withCSRFToken(url, csrfToken), {
    ...defaultOptions,
    ...config,
  })
  const response = await fetch(request)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json().then(decodeJSON)
}

const get = async <T = BasicResponse>(url: string, config?: RequestInit) => {
  const init = { method: httpMethod.GET, ...config }
  return http<T>(`${BASE_URL}${url}`, init)
}

const _delete = async <T = BasicResponse>(
  url: string,
  config?: RequestInit
) => {
  const init = { method: httpMethod.DELETE, ...config }
  return http<T>(`${BASE_URL}${url}`, init)
}

const post = async <T = BasicResponse>(
  url: string,
  body: object,
  config?: RequestInit
) => {
  const init = {
    method: httpMethod.POST,
    body: JSON.stringify(body),
    ...config,
  }
  return http<T>(`${BASE_URL}${url}`, init)
}

const put = async <T>(url: string, body: object, config?: RequestInit) => {
  const init = { method: httpMethod.PUT, body: JSON.stringify(body), ...config }
  return http<T>(`${BASE_URL}${url}`, init)
}

export const fetchAPI = {
  get,
  delete: _delete,
  post,
  put,
}

export const ws = (url: string) => {
  const csrfToken = getCookieValue(headers.csrf)
  return new WebSocket(withCSRFToken(`${BASE_URL}${url}`, csrfToken))
}
