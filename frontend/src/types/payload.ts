export interface Media {
  id: string
  url: string
  alt?: string
  caption?: string
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  sizes?: {
    thumbnail?: {
      url: string
      width: number
      height: number
    }
    card?: {
      url: string
      width: number
      height: number
    }
    hero?: {
      url: string
      width: number
      height: number
    }
  }
}

export interface HeroBlock {
  blockType: 'hero'
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage?: Media
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface FeaturesBlock {
  blockType: 'features'
  title: string
  features: Feature[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: Media
}

export interface TestimonialsBlock {
  blockType: 'testimonials'
  title: string
  testimonials: Testimonial[]
}

export interface CTABlock {
  blockType: 'cta'
  title: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
}

export type ContentBlock = HeroBlock | FeaturesBlock | TestimonialsBlock | CTABlock

export interface Page {
  id: string
  title: string
  slug: string
  metaTitle?: string
  metaDescription?: string
  layout: ContentBlock[]
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
  status: 'new' | 'in-progress' | 'responded' | 'closed'
  submittedAt: string
}

export interface ApiResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number
  nextPage?: number
}

export interface SingleApiResponse<T> {
  doc: T
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
}

export type Locale = 'en' | 'es'

export interface LocalizedString {
  en: string
  es: string
}