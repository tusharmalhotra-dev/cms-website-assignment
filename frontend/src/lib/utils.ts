import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Utility functions
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

// Language utilities
export const languages = {
  en: { label: 'English', flag: '🇺🇸' },
  es: { label: 'Español', flag: '🇪🇸' },
}

export const getLanguageFromPath = (pathname: string): 'en' | 'es' => {
  if (pathname.startsWith('/es')) return 'es'
  return 'en'
}

export const removeLanguageFromPath = (pathname: string): string => {
  return pathname.replace(/^\/(en|es)/, '') || '/'
}

// Date formatting
export const formatDate = (dateString: string, locale: 'en' | 'es' = 'en'): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}