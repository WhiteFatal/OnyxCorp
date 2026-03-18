import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [

    defineField({
      name: 'nameEn',
      title: 'Product Name (English)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'nameRu',
      title: 'Product Name (Russian)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'activeIngredientEn',
      title: 'Active Ingredient (English)',
      type: 'string',
    }),

    defineField({
      name: 'activeIngredientRu',
      title: 'Active Ingredient (Russian)',
      type: 'string',
    }),

    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'descriptionRu',
      title: 'Description (Russian)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'photo',
      title: 'Product Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Injectables', value: 'injectables' },
          { title: 'Solid Dosage', value: 'solid-dosage' },
          { title: 'Antibiotics', value: 'antibiotics' },
          { title: 'Neurology & CNS', value: 'neurology' },
          { title: 'OTC & Consumer Health', value: 'otc' },
        ],
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the page',
    }),

  ],

  preview: {
    select: {
      title: 'nameEn',
      subtitle: 'category',
      media: 'photo',
    },
  },
})
