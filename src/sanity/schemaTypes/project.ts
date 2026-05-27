import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL única',
      type: 'slug',
      options: {
        source: 'title', // Genera el slug automáticamente basado en el título
        maxLength: 96,
      },
      description: 'Haz clic en "Generate" después de escribir el título para crear el enlace.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen en el panel
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., Next.js, Tailwind, Sanity',
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),
  ],
})