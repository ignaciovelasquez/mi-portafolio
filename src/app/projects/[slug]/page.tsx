import { client } from '@/sanity/lib/client' // Esta ruta la creó el instalador de Sanity
import Image from 'next/image'
import { notFound } from 'next/navigation'

// 1. Creamos la consulta GROQ para traer solo el proyecto que coincida con la URL
async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    description,
    "imageUrl": image.asset->url,
    technologies,
    link
  }`
  
  const project = await client.fetch(query, { slug })
  return project
}

// 2. Componente de la página detallada
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Esperamos los parámetros de la URL
  const { slug } = await params
  const project = await getProject(slug)

  // Si el proyecto no existe en Sanity, muestra una página 404
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#1c2128] text-white p-8 md:p-24 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#d8a899]">
          {project.title}
        </h1>

        {/* Imagen del Proyecto */}
        {project.imageUrl && (
          <div className="w-full h-96 relative rounded-3xl overflow-hidden border border-gray-700/50 mb-8 shadow-2xl">
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              fill 
              className="object-cover"
            />
          </div>
        )}

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies?.map((tech: string) => (
            <span key={tech} className="bg-gray-800 border border-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Descripción detallada */}
        <p className="text-gray-400 leading-relaxed text-lg mb-8">
          {project.description}
        </p>

        {/* Enlace al sitio web real */}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#d8a899] hover:bg-[#c49586] text-black font-bold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            VISIT LIVE SITE
          </a>
        )}

      </div>
    </main>
  )
}