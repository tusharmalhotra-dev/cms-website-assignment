import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HeroBlock as HeroBlockType } from '@/types/payload'
import { mediaApi } from '@/lib/api'

export function HeroBlock({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage 
}: HeroBlockType) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={mediaApi.getOptimizedUrl(backgroundImage, 'hero')}
            alt={backgroundImage.alt || 'Hero background'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            {subtitle}
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href={buttonLink as any}
              className="inline-flex items-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  )
}