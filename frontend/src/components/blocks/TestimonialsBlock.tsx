import Image from 'next/image'
import { Star } from 'lucide-react'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/types/payload'
import { mediaApi } from '@/lib/api'

export function TestimonialsBlock({ title, testimonials }: TestimonialsBlockType) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-secondary-300'
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                {testimonial.image && (
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={mediaApi.getOptimizedUrl(testimonial.image, 'thumbnail')}
                      alt={testimonial.image.alt || testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}