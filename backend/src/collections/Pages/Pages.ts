import { CollectionConfig } from 'payload/types'
import { HeroBlock } from '../ContentBlocks/Hero'
import { FeaturesBlock } from '../ContentBlocks/Features'
import { TestimonialsBlock } from '../ContentBlocks/Testimonials'
import { CTABlock } from '../ContentBlocks/CTA'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Page URL Slug',
      admin: {
        description: 'URL-friendly version of the page name',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
      label: 'SEO Title',
      admin: {
        description: 'Title for search engines (50-60 characters)',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
      label: 'SEO Description',
      admin: {
        description: 'Description for search engines (150-160 characters)',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Content',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        TestimonialsBlock,
        CTABlock,
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}