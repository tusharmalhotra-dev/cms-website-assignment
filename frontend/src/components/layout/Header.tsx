'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = {
  name: string
  href: string
  nameEs: string
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en')

  const navigation: NavItem[] = [
    { name: 'Home', href: '/', nameEs: 'Inicio' },
    { name: 'About', href: '/about', nameEs: 'Acerca' },
    { name: 'Contact', href: '/contact', nameEs: 'Contacto' },
  ]

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'es' : 'en')
  }

  return (
    <header className="bg-white shadow-sm border-b border-secondary-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-bold text-secondary-900">TechFlow</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href as any}
                className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
              >
                {currentLang === 'en' ? item.name : item.nameEs}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-secondary-600 hover:text-primary-600 transition-colors"
              aria-label={`Switch to ${currentLang === 'en' ? 'Spanish' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {currentLang === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
              </span>
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary-600 hover:text-primary-600"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-secondary-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href as any}
                  className="block px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLang === 'en' ? item.name : item.nameEs}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}