import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import type { CTABlock as CTABlockType } from '@/types/payload'

export function CTABlock({ title, description, primaryButton, secondaryButton }: CTABlockType) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryButton.link as any}
              className="inline-flex items-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>{primaryButton.text}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {secondaryButton && (
              <Link
                href={secondaryButton.link as any}
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                <span>{secondaryButton.text}</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}