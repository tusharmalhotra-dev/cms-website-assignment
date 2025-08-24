import { pagesApi } from '@/lib/api'
import { ContentBlockRenderer } from '@/components/blocks/ContentBlockRenderer'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Page } from '@/types/payload'

export default async function HomePage() {
  let page: Page | null = null
  
  try {
    page = await pagesApi.getHomepage('en')
  } catch (error) {
    console.error('Failed to fetch homepage:', error)
  }

  if (!page) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TechFlow</h1>
          <p className="text-xl text-secondary-600 mb-8">
            Transform your business with AI-powered solutions
          </p>
          <div className="text-secondary-500">
            Loading content from PayloadCMS...
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {page.layout?.map((block, index) => (
        <ContentBlockRenderer key={index} block={block} />
      ))}
      
      <Footer />
    </main>
  )
}