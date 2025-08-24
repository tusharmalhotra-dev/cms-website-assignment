import type { ApiResponse, Page, Contact, ContactFormData, Locale } from '@/types/payload'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_URL}/api${endpoint}`
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export const pagesApi = {
  getAll: async (locale?: Locale): Promise<ApiResponse<Page>> => {
    const params = new URLSearchParams()
    if (locale) params.append('locale', locale)
    params.append('where[status][equals]', 'published')
    
    return apiRequest(`/pages?${params.toString()}`)
  },

  getBySlug: async (slug: string, locale?: Locale): Promise<Page | null> => {
    const params = new URLSearchParams()
    if (locale) params.append('locale', locale)
    params.append('where[slug][equals]', slug)
    params.append('where[status][equals]', 'published')
    
    const response = await apiRequest<ApiResponse<Page>>(`/pages?${params.toString()}`)
    return response.docs[0] || null
  },

  getHomepage: async (locale?: Locale): Promise<Page | null> => {
    return pagesApi.getBySlug('homepage', locale)
  },
}

export const contactsApi = {
  submit: async (data: ContactFormData): Promise<Contact> => {
    const response = await apiRequest<{ doc: Contact }>('/contacts', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
        status: 'new',
      }),
    })
    return response.doc
  },
}

export const mediaApi = {
  getUrl: (filename: string): string => {
    return `${API_URL}/media/${filename}`
  },

  getOptimizedUrl: (media: any, size: 'thumbnail' | 'card' | 'hero' = 'card'): string => {
    if (media?.sizes?.[size]?.url) {
      return `${API_URL}${media.sizes[size].url}`
    }
    return media?.url ? `${API_URL}${media.url}` : ''
  },
}

export const handleApiError = (error: any) => {
  console.error('API Error:', error.message || error)
  throw new Error(error.message || 'An error occurred')
}