import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sandbox',
  title: 'Sandbox (Code Lab)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Experimento',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Miniatura (Cuadrada)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías utilizadas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Enlace del Proyecto',
      type: 'string',
      description: 'Aquí pones la ruta local (ej: /sandbox/) o un enlace externo.',
    }),
  ],
})