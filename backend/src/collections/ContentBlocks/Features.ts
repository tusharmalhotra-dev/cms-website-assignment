import { Block } from 'payload/types'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: {
    singular: 'Features Section',
    plural: 'Features Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      label: 'Section Title',
      defaultValue: 'Our Features',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features List',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Icon (emoji or class)',
          defaultValue: '**',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          localized: true,
          label: 'Feature Description',
        },
      ],
    },
  ],
}