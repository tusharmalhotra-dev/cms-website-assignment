import { Block } from 'payload/types'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      label: 'Section Title',
      defaultValue: 'What Our Customers Say',
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Customer Testimonials',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          localized: true,
          label: 'Customer Quote',
        },
        {
          name: 'customerName',
          type: 'text',
          required: true,
          label: 'Customer Name',
        },
        {
          name: 'customerTitle',
          type: 'text',
          label: 'Customer Title/Position',
        },
        {
          name: 'company',
          type: 'text',
          label: 'Company Name',
        },
        {
          name: 'customerImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Customer Photo',
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating (1-5)',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
  ],
}