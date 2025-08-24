import { Block } from 'payload/types'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Hero Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Hero Subtitle',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      localized: true,
      label: 'Button Text',
      defaultValue: 'Get Started',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      label: 'Button Link',
      defaultValue: '#contact',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
}