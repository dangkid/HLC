"use client";

import Link from "next/link";
import { useState } from "react";
import { TerminalIcon, GithubIcon } from "@/components/Icons";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Proyectos() {
  const [filter, setFilter] = useState<"todos" | "en-proceso">("todos");

  // Proyectos reales de Oliver
  const proyectos = [
    {
      id: 1,
      titulo: "ComunicaCentros - CAA Comunicación Aumentativa",
      categoria: "en-proceso",
      descripcion: "Plataforma integral de comunicación aumentativa y educación. Sistema text-to-speech, construcción de frases, integración ARASAAC API, modo escáner y PWA.",
      tecnologias: ["React 18", "Vite", "Firebase", "Tailwind CSS", "PWA"],
      año: "2025",
      github: "https://github.com/dangkid/project-lifeisgood",
      demo: "https://comunicacentros.web.app",
      detalles: "Sistema completo con autenticación, roles de usuario (Admin, Educador, Familia), integración ARASAAC API para pictogramas, modo escáner para accesibilidad. Desplegado en Firebase Hosting."
    },
    {
      id: 2,
      titulo: "Proyecto Sana - Landing Page",
      categoria: "en-proceso",
      descripcion: "Landing page moderna y responsiva para Sana Cursos Clínicos. Diseño estático que reemplaza la página de inicio por defecto de Moodle.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      año: "2025",
      github: "https://github.com/dangkid/proyecto-sana",
      demo: "",
      detalles: "Sitio estático optimizado para Moodle. Estructura semántica HTML5, estilos CSS3 responsivos, menú móvil con JavaScript vanilla. Desplegado en VPS con Caddy."
    },
    {
      id: 3,
      titulo: "Project CeviPoint - Sistema POS",
      categoria: "en-proceso",
      descripcion: "Aplicación web moderna y lista para producción diseñada para cevicherías. Sistema de punto de venta con gestión real-time de pedidos.",
      tecnologias: ["Vanilla JavaScript", "Firebase Firestore", "Bootstrap 5", "localStorage"],
      año: "2026",
      github: "https://github.com/dangkid/Project-CeviPoint",
      demo: "",
      detalles: "Sistema POS completo: autenticación con PIN de 4 dígitos, control de roles (Mesero, Cocinero, Caja, Admin), gestión de pedidos en tiempo real, tablero de cocina, reportes en PDF/CSV, cierre de turno con auditoría. Respaldo local en localStorage."
    },
    {
      id: 4,
      titulo: "Espinoza Connect Transfers",
      categoria: "en-proceso",
      descripcion: "Plataforma moderna de transferencias y conexiones. Aplicación responsiva con internacionalización (inglés/español) y diseño optimizado.",
      tecnologias: ["React 19", "Vite", "Tailwind CSS", "React Router", "i18next"],
      año: "2025",
      github: "https://github.com/dangkid/project-espinozaconnectransfers",
      demo: "",
      detalles: "Aplicación web responsiva con soporte multi-idioma usando i18next. Componentes reutilizables, routing con React Router, diseño moderno con Tailwind CSS. Optimizado para rendimiento con Vite bundler."
    },
  ];

  const proyectosFiltrados = proyectos.filter(p => 
    filter === "todos" || p.categoria === filter
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-800 dark:text-slate-200 hover:text-accent transition-colors font-semibold"
          >
            OD&apos;ME
          </Link>
          <div className="flex gap-6 md:gap-10 text-xs md:text-sm">
            <Link href="/proyectos" className="text-slate-900 dark:text-slate-100 font-medium">
              Proyectos
            </Link>
            <Link href="/sobre-mi" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:tracking-wider">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 md:mb-6">
              Portfolio Técnico
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-slate-50 mb-4 md:mb-6">
              Proyectos
            </h1>
            <div className="h-px w-20 md:w-32 bg-accent mx-auto mb-6 md:mb-8" />
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Soluciones técnicas desarrolladas durante mi formación en ASIR
              y proyectos personales de experimentación
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4">
            <button
              onClick={() => setFilter("todos")}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider transition-all ${
                filter === "todos"
                  ? "bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900"
                  : "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-100"
              }`}
            >
              TODOS
            </button>
            <button
              onClick={() => setFilter("en-proceso")}
              className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm tracking-wider transition-all ${
                filter === "en-proceso"
                  ? "bg-accent text-slate-900"
                  : "border border-accent text-accent hover:bg-accent/10 transition-all"
              }`}
            >
              EN PROCESO
            </button>
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <article 
                key={proyecto.id}
                className="group border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Header del proyecto */}
                <div className="p-6 md:p-8 bg-slate-100 dark:bg-slate-900 group-hover:bg-slate-900 dark:group-hover:bg-slate-100 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent group-hover:text-slate-400 transition-colors">
                      {proyecto.categoria}
                    </span>
                    <span className="text-xs md:text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-400 transition-colors font-mono">
                      {proyecto.año}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-xl md:text-3xl text-slate-900 dark:text-slate-50 group-hover:text-slate-50 dark:group-hover:text-slate-900 transition-colors mb-3 md:mb-4 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  
                  <div className="h-px w-12 md:w-16 bg-accent group-hover:w-full transition-all duration-500" />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6 md:p-8">
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6">
                    {proyecto.descripcion}
                  </p>

                  {/* Detalles adicionales */}
                  {proyecto.detalles && (
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-500 leading-relaxed mb-4 italic">
                      📋 {proyecto.detalles}
                    </p>
                  )}

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-mono border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                    {proyecto.github && (
                      <a 
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {proyecto.demo && (
                      <a 
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-2"
                      >
                        <span>Demo</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {!proyecto.github && !proyecto.demo && (
                      <span className="text-slate-500 dark:text-slate-500 italic">
                        Proyecto académico
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="mt-12 md:mt-20 p-6 md:p-12 border border-slate-200 dark:border-slate-800 text-center">
            <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
              <div className="flex justify-center text-slate-600 dark:text-slate-400 mb-3 md:mb-4">
                <TerminalIcon className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <p className="font-serif text-lg md:text-2xl italic text-slate-700 dark:text-slate-300 px-4">
                &quot;Cada proyecto es una oportunidad de aprender,
                <br className="hidden sm:block" />
                cada línea de código, un nuevo descubrimiento&quot;
              </p>
              <div className="h-px w-16 md:w-24 bg-accent mx-auto my-4 md:my-6" />
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-500 px-4">
                Portfolio en evolución donde cada proyecto representa un paso más
                en el camino del aprendizaje continuo y la experimentación técnica.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
