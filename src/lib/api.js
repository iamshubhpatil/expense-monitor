import { supabase, supabaseUrl, supabaseAnonKey } from '@/lib/supabase'

const FUNCTIONS_BASE_URL = `${supabaseUrl.replace(/\/$/, '')}/functions/v1`

const buildFunctionUrl = (functionName, params) => {
  const url = new URL(`${FUNCTIONS_BASE_URL}/${functionName}`)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value))
      }
    })
  }
  return url.toString()
}

const getStoredAccessToken = () => {
  if (typeof window === 'undefined' || !window.localStorage) return null
  const tokenKey = Object.keys(localStorage).find((key) => key.includes('auth-token'))
  if (!tokenKey) return null
  try {
    const tokenData = JSON.parse(localStorage.getItem(tokenKey) || '{}')
    return tokenData?.access_token || null
  } catch {
    return null
  }
}

const normalizePath = (path) => {
  const cleaned = path.split('?')[0].replace(/\/+$/, '')
  return cleaned.startsWith('/') ? cleaned.slice(1) : cleaned
}

const extractQueryParams = (path) => {
  const queryString = path.includes('?') ? path.split('?')[1] : ''
  const params = {}
  if (!queryString) return params
  const searchParams = new URLSearchParams(queryString)
  for (const [key, value] of searchParams.entries()) {
    params[key] = value
  }
  return params
}

const invokeFunction = async (functionName, options = {}) => {
  try {
    const invokeOptions = { ...options }
    if (functionName === 'admin') {
      const adminBody = {
        ...invokeOptions.body,
        _path: options._originalPath,
      }

      if (invokeOptions.method === 'GET') {
        invokeOptions.method = 'POST'
        adminBody._method = 'GET'
      }

      invokeOptions.body = adminBody
      invokeOptions.headers = {
        ...(invokeOptions.headers || {}),
        'Content-Type': 'application/json',
      }
    }

    const { data: { session } = {} } = await supabase.auth.getSession().catch(() => ({ data: { session: null } }))
    const accessToken = session?.access_token || getStoredAccessToken()

    const headers = {
      ...(invokeOptions.headers || {}),
    }

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    } else if (supabaseAnonKey) {
      headers.apikey = supabaseAnonKey
    }

    let body = invokeOptions.body
    if (body && typeof body !== 'string' && invokeOptions.method !== 'GET' && invokeOptions.method !== 'HEAD') {
      headers['Content-Type'] = headers['Content-Type'] || 'application/json'
      body = JSON.stringify(body)
    }

    let functionPath = functionName
    if (invokeOptions._originalPath) {
      const original = invokeOptions._originalPath.replace(/^\//, '')
      const cleanedOriginal = original.startsWith(`${functionName}/`)
        ? original.replace(new RegExp(`^${functionName}/`), '')
        : original
      functionPath = `${functionName}/${cleanedOriginal}`
    }

    const url = buildFunctionUrl(functionPath, invokeOptions.params)
    const response = await fetch(url, {
      method: invokeOptions.method,
      headers,
      body: invokeOptions.method === 'GET' || invokeOptions.method === 'HEAD' ? undefined : body,
    })

    const responseBody = invokeOptions.responseType === 'blob'
      ? await response.blob()
      : await response.text()

    if (!response.ok) {
      let parsedError = responseBody
      if (typeof responseBody === 'string') {
        try {
          parsedError = JSON.parse(responseBody)
        } catch {
          parsedError = { message: responseBody }
        }
      }
      throw { response: { status: response.status, data: parsedError } }
    }

    const data = invokeOptions.responseType === 'blob'
      ? responseBody
      : responseBody ? JSON.parse(responseBody) : null

    return { data, status: response.status }
  } catch (error) {
    if (error && error.response) {
      throw error
    }
    if (error?.message) {
      throw { response: { status: 500, data: { message: error.message } } }
    }
    throw error
  }
}

const resourceIdPaths = new Set([
  'accounts',
  'expenses',
  'income',
  'budgets',
  'transfers',
  'expense-categories',
  'income-categories',
])

const pathToFunctionName = (method, path) => {
  const normalizedPath = normalizePath(path)
  if (normalizedPath.startsWith('admin/')) {
    return 'admin'
  }

  if (normalizedPath === 'auth/profile' && method === 'GET') {
    return 'get-auth-profile'
  }

  if (normalizedPath.startsWith('auth/') && method !== 'GET') {
    return 'auth'
  }

  if (normalizedPath.startsWith('accounts') && method !== 'GET') {
    return 'accounts'
  }

  if (normalizedPath === 'income' || normalizedPath.startsWith('income/')) {
    return 'income'
  }

  if ((normalizedPath.startsWith('expense-categories') || normalizedPath.startsWith('income-categories')) && method !== 'GET') {
    return 'categories'
  }

  if (normalizedPath === 'budgets/alerts/list' && method === 'GET') {
    return 'budgets-alerts-list'
  }

  if (normalizedPath === 'budgets/alerts/read' && method === 'PUT') {
    return 'budgets-alerts-read'
  }

  if (normalizedPath === 'budgets/alerts/mark-all/read' && method === 'PUT') {
    return 'budgets-alerts-mark-all-read'
  }

  if (normalizedPath.startsWith('reports/') && method === 'GET') {
    if (normalizedPath === 'reports/categories') return 'get-reports-categories'
    if (normalizedPath === 'reports/overview') return 'get-reports-overview'
    if (normalizedPath === 'reports/budgets/comparison') return 'reports-budgets-comparison'
    if (normalizedPath === 'reports/charts/income') return 'reports-charts-income'
    if (normalizedPath === 'reports/charts/expenses') return 'reports-charts-expenses'
    if (normalizedPath === 'reports/export/csv') return 'reports-export-csv'
  }

  const parts = normalizedPath.split('/')
  const resource = parts[0]

  if (resource === 'expenses') {
    if (method === 'GET') return 'get-expenses'
    if (method === 'POST') return 'create-expense'
    if (method === 'PUT' && parts.length === 2) return 'update-expense'
    if (method === 'DELETE' && parts.length === 2) return 'delete-expense'
  }

  if (method === 'GET') {
    if (parts.length === 1) {
      return `get-${parts[0]}`
    }
    return `get-${parts.join('-')}`
  } else if (method === 'POST') {
    return `create-${parts[0]}`
  } else if (method === 'PUT' && parts.length === 2) {
    return `update-${parts[0]}`
  } else if (method === 'DELETE' && parts.length === 2) {
    return `delete-${parts[0]}`
  }

  return normalizedPath.replace(/\//g, '-').replace(/^-/, '')
}

const apiClient = {
  get: async (url, config = {}) => {
    const functionName = pathToFunctionName('GET', url)
    const options = {
      method: 'GET',
      params: extractQueryParams(url),
      ...config,
    }
    if (functionName === 'admin') {
      options._originalPath = url
    }
    return invokeFunction(functionName, options)
  },

  post: async (url, data, config = {}) => {
    const functionName = pathToFunctionName('POST', url)
    const options = {
      method: 'POST',
      body: data,
      ...config,
    }
    if (['admin', 'auth', 'income', 'categories'].includes(functionName)) {
      options._originalPath = url
    }
    return invokeFunction(functionName, options)
  },

  put: async (url, data, config = {}) => {
    const functionName = pathToFunctionName('PUT', url)
    const urlParts = url.split('/').filter(Boolean)
    if (urlParts.length === 2 && resourceIdPaths.has(urlParts[0])) {
      data = { ...data, id: urlParts[1] }
    }
    const options = {
      method: 'PUT',
      body: data,
      ...config,
    }
    if (['admin', 'auth', 'income', 'categories', 'update-expense', 'delete-expense', 'update-transfers', 'delete-transfers', 'budgets-alerts-read', 'budgets-alerts-mark-all-read'].includes(functionName)) {
      options._originalPath = url
    }
    return invokeFunction(functionName, options)
  },

  patch: async (url, data, config = {}) => {
    const functionName = pathToFunctionName('PATCH', url)
    const options = {
      method: 'PATCH',
      body: data,
      ...config,
    }
    if (['admin', 'auth', 'income', 'categories'].includes(functionName)) {
      options._originalPath = url
    }
    return invokeFunction(functionName, options)
  },

  delete: async (url, config = {}) => {
    const functionName = pathToFunctionName('DELETE', url)
    const urlParts = url.split('/').filter(Boolean)
    const body = urlParts.length === 2 && resourceIdPaths.has(urlParts[0]) ? { id: urlParts[1] } : {}
    const options = {
      method: 'DELETE',
      body,
      ...config,
    }
    if (['admin', 'auth', 'income', 'categories', 'update-expense', 'delete-expense', 'update-transfers', 'delete-transfers'].includes(functionName)) {
      options._originalPath = url
    }
    return invokeFunction(functionName, options)
  },

}

export default apiClient
