import { Block } from 'payload/types'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call-to-Action Section',
    plural: 'Call-to-Action Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'CTA Title',
      defaultValue: 'Ready to Get Started?',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      localized: true,
      label: 'CTA Subtitle',
      defaultValue: 'Join thousands of satisfied customers today',
    },
    {
      name: 'primaryButton',
      type: 'group',
      label: 'Primary Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
          label: 'Button Text',
          defaultValue: 'Start Free Trial',
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Button Link',
          defaultValue: '#contact',
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'primary',
        },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      label: 'Secondary Button (Optional)',
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          label: 'Button Text',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'outline',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Gray', value: 'gray' },
        { label: 'Blue', value: 'blue' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'blue',
    },
  ],
}