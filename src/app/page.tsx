//src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center font-sans">
      
      {/* 1. NAVEGADOR FLOTANTE (Navbar) */}
      <nav className="w-full max-w-5xl mx-auto pt-8 flex justify-center relative z-10">
        <div className="bg-[#1c2128]/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 flex gap-8 text-xs font-semibold tracking-widest shadow-2xl">
          <a href="#home" className="hover:text-[#d8a899] transition-colors">HOME</a>
          <a href="#about" className="hover:text-[#d8a899] transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-[#d8a899] transition-colors">PROJECTS</a>
          <a href="#education" className="hover:text-[#d8a899] transition-colors">EDUCATION</a>
          <a href="#contact" className="hover:text-[#d8a899] transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* 2. HERO SECTION (Sección Principal Mejorada) */}
      <section id="home" className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative h-screen">
        
        {/* Columna Izquierda: Texto y Botones (Sin cambios, pero con mejor padding top) */}
        <div className="md:w-1/2 flex flex-col items-start text-left z-10 pt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            BUILDING <br />
            <span className="text-[#d8a899]">HIGH-PERFORMANCE</span> <br />
            WEB SOLUTIONS
          </h1>
          
          <p className="text-gray-400 text-sm font-medium tracking-widest mb-10 border-l-2 border-[#d8a899] pl-4">
            FULL-STACK DEVELOPER | FROM CONCEPT TO CODE
          </p>
          
          <div className="flex gap-4">
            <button className="bg-[#d8a899] hover:bg-[#c49586] text-black px-8 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(216,168,153,0.3)]">
              VIEW PROJECTS
            </button>
            <button className="border border-[#d8a899] text-[#d8a899] hover:bg-[#d8a899]/10 px-8 py-3 rounded-full text-sm font-bold transition-all">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>

        {/* Columna Derecha: El recuadro para tu foto con elementos flotantes (LA MAGIA ESTÁ AQUÍ) */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative h-112"> 
          {/* El resplandor de fondo detrás de la foto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#d8a899] rounded-full blur-[100px] opacity-10"></div>
          
          {/* Contenedor CENTRAL de la foto (Relativo para posicionar elementos adentro) */}
          <div className="relative w-80 h-80 z-10">
            
            {/* A. BADGE "AVAILABLE FOR PROJECTS" (Nuevo - Top-Right corner) */}
            <div className="absolute -top-10 -right-10 z-20 w-32 h-32 bg-[#1c2128] rounded-full border border-gray-700/50 flex flex-col items-center justify-center p-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div> {/* Punto verde */}
              <p className="text-[10px] font-bold text-gray-400 tracking-wider">AVAILABLE</p>
              <p className="text-[8px] text-gray-600 tracking-tight">FOR PROJECTS</p>
              {/* Nota: Reemplazar por un SVG con texto circular para el toque final de la imagen */}
            </div>

            {/* B. Foto Real (Tu imagen recortada y redondeada) */}
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

            {/* C. ICONOS FLOTANTES (Enlazados a tus archivos reales) */}
            
            {/* Icono 1: Next.js (Top-Left) */}
            <div className="absolute -top-6 -left-8 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/nextjs-icon.svg" alt="Next.js" width={28} height={28} className="opacity-80" />
            </div>
            
            {/* Icono 2: Sanity (Top-Right-ish) */}
            <div className="absolute top-10 -right-6 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/sanity.svg" alt="Sanity.io" width={28} height={28} className="opacity-80" />
            </div>

            {/* Icono 3: Node.js (Bottom-Right) */}
            <div className="absolute bottom-6 -right-8 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/nodejs.svg" alt="Node.js" width={28} height={28} className="opacity-80" />
            </div>

            {/* Icono 4: React (Bottom-Left) */}
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#1c2128]/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300">
               <Image src="/icons/react.svg" alt="React" width={28} height={28} className="opacity-80" />
            </div>

          </div>

        </div>

      </section>
      {/* 3. TECHNOLOGY STACK (Grilla de Tecnologías) */}
      <section id="about" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* Título de la sección */}
        <div className="flex items-center mb-10">
          <h2 className="text-xs font-extrabold tracking-[0.2em] text-gray-400 border-l-2 border-[#d8a899] pl-4 uppercase">
            Technology & Tools
          </h2>
        </div>

        {/* Grilla de Iconos */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          
          {/* Array con los nombres de tus iconos. 
              Asegúrate de tener estos archivos en public/icons/ */}
          {[
            'nextjs-icon', 'react', 'nodejs', 'sanity', 
            'aws', 'python', 'django', 'postgresql'
          ].map((tech) => (
            <div 
              key={tech} 
              className="aspect-square bg-[#1c2128]/50 border border-gray-700/50 rounded-2xl flex items-center justify-center shadow-lg hover:border-[#d8a899]/50 hover:shadow-[0_0_15px_rgba(216,168,153,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <Image 
                src={`/icons/${tech}.svg`} 
                alt={tech} 
                width={32} 
                height={32} 
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" 
              />
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}