import type { ContentBlock } from '@/types/payload'
import { HeroBlock } from '@/components/blocks/HeroBlock'
import { FeaturesBlock } from '@/components/blocks/FeaturesBlock'
import { TestimonialsBlock } from '@/components/blocks/TestimonialsBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

interface ContentBlockRendererProps {
  block: ContentBlock
}

export function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock {...block} />
    case 'features':
      return <FeaturesBlock {...block} />
    case 'testimonials':
      return <TestimonialsBlock {...block} />
    case 'cta':
      return <CTABlock {...block} />
    default:
      return null
  }
}