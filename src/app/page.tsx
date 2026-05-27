//src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

// 1. NUEVA FUNCIÓN: Consulta a Sanity
async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    technologies
  }`;
  return client.fetch(query);
}
interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
}

// 2. MODIFICACIÓN: Agregamos "async" a la función Home
export default async function Home() {
  // 3. NUEVO: Obtenemos los proyectos antes de renderizar la página
  const projects = await getProjects();

  return (
    <main className="min-h-screen flex flex-col items-center font-sans">
      
      {/* 1. NAVEGADOR FLOTANTE (Navbar) */}
      <nav className="w-full max-w-5xl mx-auto pt-8 flex justify-center relative z-10">
        <div className="bg-[#1c2128]/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 flex gap-8 text-xs font-semibold tracking-widest shadow-2xl">
          <a href="#home" className="hover:text-[#d8a899] transition-colors">INICIO</a>
          <a href="#about" className="hover:text-[#d8a899] transition-colors">YO</a>
          <a href="#projects" className="hover:text-[#d8a899] transition-colors">PROYECTOS</a>
          <a href="#education" className="hover:text-[#d8a899] transition-colors">EDUCACIÓN</a>
          <a href="#contact" className="hover:text-[#d8a899] transition-colors">SANDBOX</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative h-screen">
        
        {/* Columna Izquierda */}
        <div className="md:w-1/2 flex flex-col items-start text-left z-10 pt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            <span className="text-[#d8a899]">Ignacio Velásquez Vidal</span> <br />
            Desarrollador Web
          </h1>
          
          <p className="text-gray-400 text-sm font-medium tracking-widest mb-10 border-l-2 border-[#d8a899] pl-4">
            FULL-STACK DEVELOPER | Javascrip - Python
          </p>
          
          <div className="flex gap-4">
            <button className="border border-[#d8a899] text-[#d8a899] hover:bg-[#d8a899]/10 px-8 py-3 rounded-full text-sm font-bold transition-all">
              FORMULARIO CONTACTO
            </button>
          </div>
        </div>

        {/* Columna Derecha (Foto) */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative h-112"> 
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#d8a899] rounded-full blur-[100px] opacity-10"></div>
          
          <div className="relative w-80 h-80 z-10">
            <div className="absolute -top-10 -right-10 z-20 w-32 h-32 bg-[#1c2128] rounded-full border border-gray-700/50 flex flex-col items-center justify-center p-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
              <p className="text-[10px] font-bold text-gray-400 tracking-wider">Disponible</p>
              <p className="text-[8px] text-gray-600 tracking-tight">Para proyectos, empleo</p>
            </div>

            <div className="w-full h-full bg-[#1c2128] rounded-3xl border border-gray-700/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <Image 
                src="/imagen-perfil.png" 
                alt="Ignacio Velásquez - Full-Stack Developer" 
                width={320} 
                height={320} 
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="absolute -top-6 -left-8 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/nextjs-icon.svg" alt="Next.js" width={28} height={28} className="opacity-80" />
            </div>
            
            <div className="absolute top-10 -right-6 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/sanity.svg" alt="Sanity.io" width={28} height={28} className="opacity-80" />
            </div>

            <div className="absolute bottom-6 -right-8 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/nodejs.svg" alt="Node.js" width={28} height={28} className="opacity-80" />
            </div>

            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/react.svg" alt="React" width={28} height={28} className="opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY STACK */}
      <section id="about" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="flex items-center mb-10">
          <h2 className="text-xs font-extrabold tracking-[0.2em] text-gray-400 border-l-2 border-[#d8a899] pl-4 uppercase">
           | TECNOLOGÍA Y HERRAMIENTAS | |
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { name: 'Next.js', file: 'nextjs-icon' },
            { name: 'React', file: 'react' },
            { name: 'Node.js', file: 'nodejs' },
            { name: 'Sanity', file: 'sanity' },
            { name: 'AWS', file: 'aws' },
            { name: 'Python', file: 'python' },
            { name: 'Django', file: 'django' },
            { name: 'PostgreSQL', file: 'postgresql' }
          ].map((tech) => (
            <div 
              key={tech.name} 
              className="aspect-square bg-[#1c2128]/50 border border-gray-700/50 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-lg hover:border-[#d8a899]/50 hover:shadow-[0_0_15px_rgba(216,168,153,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group p-2"
            >
              <Image src={`/icons/${tech.file}.svg`} alt={tech.name} width={36} height={36} className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xs font-semibold text-gray-400 group-hover:text-[#d8a899] transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (AHORA ES DINÁMICO DESDE SANITY) */}
      <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12 tracking-widest">
          PROYECTOS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mapeamos los proyectos de Sanity usando .map() */}
          {projects.map((project: Project) => (
            <Link href={`/projects/${project.slug}`} key={project._id} className="block group h-full">
              <div className="bg-[#1c2128] border border-gray-700/50 rounded-3xl overflow-hidden hover:border-[#d8a899]/50 shadow-lg hover:shadow-[0_10px_30px_rgba(216,168,153,0.1)] transition-all duration-300 h-full flex flex-col">
                
                {/* Imagen del Proyecto */}
                <div className="h-56 bg-gray-800/50 relative overflow-hidden flex items-center justify-center border-b border-gray-700/50">
                  {project.imageUrl ? (
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <span className="text-gray-500 font-medium">No Image</span>
                  )}
                </div>
                
                {/* Textos y Tecnologías */}
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d8a899] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies?.map((tech: string) => (
                      <span key={tech} className="bg-[#1c2128] text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* 5. EDUCATION & CERTIFICATIONS */}
      <section id="education" className="w-full mt-10 border-y border-gray-700/50 bg-[#1c2128]/30 relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
            
            <div className="flex items-center gap-5 pt-4 md:pt-0 px-4">
              <div className="w-12 h-12 rounded-full bg-[#1c2128] border border-[#d8a899]/30 flex items-center justify-center text-[#d8a899] text-xl shadow-[0_0_10px_rgba(216,168,153,0.1)]">
                🎓
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">Programming Studies</h4>
                <p className="text-gray-400 text-xs mt-1">Night Classes • Present</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-4 md:pt-0 px-4">
              <div className="w-12 h-12 rounded-full bg-[#1c2128] border border-[#d8a899]/30 flex items-center justify-center text-[#d8a899] text-xl shadow-[0_0_10px_rgba(216,168,153,0.1)]">
                💼
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">Freelance Developer</h4>
                <p className="text-gray-400 text-xs mt-1">Independent Entrepreneur</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-4 md:pt-0 px-4">
              <div className="w-12 h-12 rounded-full bg-[#1c2128] border border-[#d8a899]/30 flex items-center justify-center text-[#d8a899] text-xl shadow-[0_0_10px_rgba(216,168,153,0.1)]">
                🚀
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">AI & Web Workflows</h4>
                <p className="text-gray-400 text-xs mt-1">Continuous Specialization</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}