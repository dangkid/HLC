"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import RevealOnScroll from "@/components/RevealOnScroll";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import { CodeIcon, TerminalIcon, SparklesIcon } from "@/components/Icons";
import { FiLock, FiShield, FiUsers, FiSearch, FiTrendingUp, FiStar } from "react-icons/fi";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden cursor-none md:cursor-none">
      {/* Componentes interactivos globales */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Efecto de fondo interactivo */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
        }}
      />

      {/* Navegación minimalista profesional */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-900 dark:text-slate-100 hover:text-accent transition-colors font-semibold"
          >
            OD.SEC
          </Link>
          <div className="flex gap-6 md:gap-10 text-xs md:text-sm">
            <Link href="/proyectos" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/sobre-mi" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:tracking-wider">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diseño asimétrico */}
      <main>
        <section className="min-h-screen flex items-center px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Columna izquierda - Texto profesional */}
            <div className={`space-y-6 md:space-y-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="space-y-3 md:space-y-4">
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent">
                  Junior Developer | Estudiante ASIR
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-slate-900 dark:text-slate-50">
                  Oliver
                  <br />
                  Dangelo
                  <br />
                  Magallanes
                </h1>
              </div>

              <div className="h-px w-16 md:w-24 bg-accent" />

              <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-light">
                Estudiante de ASIR enfocado en desarrollo web con React, Next.js y vibecoding. Interesado en ciberseguridad (Google Certified, Virensis 120h). Soporte técnico y diseño de soluciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
                <MagneticButton 
                  href="/proyectos"
                  className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden text-center"
                >
                  <span className="absolute inset-0 bg-slate-900 dark:bg-slate-100 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full" />
                  <span className="relative z-10 text-sm md:text-base text-slate-900 dark:text-slate-100 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300">
                    Ver proyectos
                  </span>
                </MagneticButton>
                <a 
                  href="https://github.com/dangkid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 transition-colors text-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                >
                  Ver GitHub
                </a>
              </div>
            </div>

            {/* Columna derecha - Stat cards profesionales */}
            <div className={`hidden lg:grid grid-cols-1 gap-6 mt-12 lg:mt-0 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="bg-slate-100 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 rounded-lg">
                <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Certificaciones</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-slate-50">7</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Google & Virensis en Ciberseguridad</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 rounded-lg">
                <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Proyectos Web</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-slate-50">5+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">React, Next.js, Full-Stack</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 rounded-lg">
                <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">Stack Tech</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-slate-50">10+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Desarrollo, Sistemas, Seguridad</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de skills profesionales */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-20 text-slate-900 dark:text-slate-50 px-4">
                Especialidades y Competencias
              </h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Ciberseguridad */}
              <RevealOnScroll delay={100}>
                <div className="space-y-6">
                  <div className="text-accent">
                    <TerminalIcon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Ciberseguridad
                  </h3>
                  <div className="h-px w-16 bg-accent" />
                  <ul className="text-sm md:text-base text-slate-600 dark:text-slate-400 space-y-2">
                    <li>• Google Certified en Ciberseguridad</li>
                    <li>• Virensis IFCT0050 (120 horas)</li>
                    <li>• Análisis básico de seguridad</li>
                    <li>• Aprendiendo: Respuesta a incidentes</li>
                    <li>• Seguridad en redes y aplicaciones web</li>
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Desarrollo Web */}
              <RevealOnScroll delay={200}>
                <div className="space-y-6">
                  <div className="text-accent">
                    <CodeIcon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Desarrollo Web
                  </h3>
                  <div className="h-px w-16 bg-accent" />
                  <ul className="text-sm md:text-base text-slate-600 dark:text-slate-400 space-y-2">
                    <li>• React 18 & Next.js 14+</li>
                    <li>• Vibecoding & Pair Programming</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Tailwind CSS & Diseño ResponsiveI</li>
                    <li>• Firebase & Bases de datos</li>
                  </ul>
                </div>
              </RevealOnScroll>

              {/* DevOps & Sistemas */}
              <RevealOnScroll delay={300}>
                <div className="space-y-6">
                  <div className="text-accent">
                    <SparklesIcon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Soporte Técnico &amp; DevOps
                  </h3>
                  <div className="h-px w-16 bg-accent" />
                  <ul className="text-sm md:text-base text-slate-600 dark:text-slate-400 space-y-2">
                    <li>• Linux & Windows Server</li>
                    <li>• Docker & Kubernetes</li>
                    <li>• AWS, CI/CD, GitHub Actions</li>
                    <li>• Active Directory & User Management</li>
                    <li>• Cisco Redes & Segmentación</li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={400}>
              <div className="mt-16 md:mt-20 text-center">
                <Link 
                  href="/sobre-mi"
                  className="inline-block px-8 py-4 bg-accent text-white hover:bg-accent/90 transition-all duration-300 text-sm tracking-[0.1em] uppercase"
                >
                  Ver todas las competencias
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sección de estadísticas */}
        <section className="py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <Stats />
          </RevealOnScroll>
        </section>

        {/* Sección de Certificados */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Credenciales
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-6">
                  Certificaciones Profesionales
                </h2>
                <div className="h-px w-24 bg-accent mx-auto" />
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
              {/* Google Certificate */}
              <RevealOnScroll delay={100}>
                <div className="bg-white dark:bg-slate-950 p-8 md:p-12 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all duration-500 group">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                        Google Cybersecurity
                      </h3>
                      <FiLock className="w-12 h-12 md:w-14 md:h-14 text-accent" />
                    </div>
                    <div className="h-px w-16 bg-accent" />
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Certificado Profesional en Ciberseguridad. Cursos en seguridad de redes, gestión de riesgos y respuesta a incidentes.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-500">Plataforma: Coursera</p>
                      <p className="text-xs text-amber-600 dark:text-amber-500 font-semibold">EN PROGRESO - Curso 2/9</p>
                    </div>
                    <a 
                      href="https://www.coursera.org/learn/google-cybersecurity-certificate" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 text-sm text-accent border border-accent hover:bg-accent/10 transition-colors"
                    >
                      Ver Curso →
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Virensis Certificate */}
              <RevealOnScroll delay={200}>
                <div className="bg-white dark:bg-slate-950 p-8 md:p-12 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all duration-500 group">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                        Ciberseguridad Avanzada
                      </h3>
                      <FiShield className="w-12 h-12 md:w-14 md:h-14 text-accent" />
                    </div>
                    <div className="h-px w-16 bg-accent" />
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      IFCT0050 - Formación avanzada de 120 horas en ciberseguridad industrial y entornos OT. Financiado por NextGenerationEU y SEPE.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-500">Organización: Virensis</p>
                      <p className="text-xs text-green-600 dark:text-green-500 font-semibold">Completado ✓</p>
                    </div>
                    <div className="mt-4 inline-block px-6 py-2 text-sm text-accent border border-accent/30">
                      Acreditación oficial
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* GitHub Foundations */}
              <RevealOnScroll delay={300}>
                <div className="bg-white dark:bg-slate-950 p-8 md:p-12 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all duration-500 group">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                        GitHub Foundations
                      </h3>
                      <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="h-px w-16 bg-accent" />
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      GitHub Foundations - Certificación oficial de GitHub. Conocimientos en control de versiones, Git, GitHub workflows y colaboración.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-500">Plataforma: GitHub</p>
                      <p className="text-xs text-amber-600 dark:text-amber-500 font-semibold">EN PROGRESO - Planeado</p>
                    </div>
                    <a 
                      href="https://github.com/dangkid" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 text-sm text-accent border border-accent hover:bg-accent/10 transition-colors"
                    >
                      Ver GitHub →
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Sección de Valores */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Mi Filosofía
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-6">
                  Valores y Enfoque
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Lo que me mueve como profesional y como persona
                </p>
                <div className="h-px w-24 bg-accent mx-auto mt-6" />
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Empatía y Enseñanza */}
              <RevealOnScroll delay={100}>
                <div className="space-y-4 md:space-y-6 p-8 md:p-10 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all group">
                  <FiUsers className="text-accent w-8 h-8 md:w-10 md:h-10 mb-4" />
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Empatía & Enseñanza
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Me apasiona ayudar a otros a crecer. Cuando logro algo, mi primer instinto es compartirlo para que mis compañeros también lo logren. Creo que el mejor equipo es aquel donde todos crecemos juntos.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Seguridad & Investigación */}
              <RevealOnScroll delay={150}>
                <div className="space-y-4 md:space-y-6 p-8 md:p-10 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all group">
                  <FiSearch className="text-accent w-8 h-8 md:w-10 md:h-10 mb-4" />
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Seguridad & Investigación
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Me apasiona defender, indagar e investigar. Proteger datos importa mucho. Este mundo me fascina: encontrar vulnerabilidades, entender riesgos y construir sistemas resilientes.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Mejora Constante */}
              <RevealOnScroll delay={200}>
                <div className="space-y-4 md:space-y-6 p-8 md:p-10 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all group">
                  <FiTrendingUp className="text-accent w-8 h-8 md:w-10 md:h-10 mb-4" />
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Mejora Constante
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Siempre pensando en cómo mejorar, tanto profesional como personalmente. Cuando no programo, estoy planeando el siguiente paso. Paciencia y dedicación como herramientas principales.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Clima y Adaptabilidad */}
              <RevealOnScroll delay={250}>
                <div className="space-y-4 md:space-y-6 p-8 md:p-10 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all group">
                  <FiStar className="text-accent w-8 h-8 md:w-10 md:h-10 mb-4" />
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Energía & Adaptabilidad
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Soy alegre, ocurrente y adaptable. Me ajusto a cualquier rol—equipo, individual, liderazgo o soporte. Lo que importa es aportar valor. Mi familia, especialmente mi madre, me motiva cada día.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Sección de proyectos destacados */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Portfolio
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-6">
                  Proyectos Significativos
                </h2>
                <div className="h-px w-24 bg-accent mx-auto mb-6" />
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Selección de mis trabajos más destacados en infraestructura, redes y automatización
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-2xl mx-auto mb-12">
              <RevealOnScroll delay={100}>
                <div className="group bg-slate-50 dark:bg-slate-950 p-8 md:p-12 border border-slate-200 dark:border-slate-800 hover:border-accent transition-all duration-500">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Arduino</span>
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">RFID RC522</span>
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">IoT</span>
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Microcontroladores</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50 group-hover:text-accent transition-colors">
                      R.A.C.E.R - Control de Acceso
                    </h3>
                    <div className="h-px w-16 bg-accent group-hover:w-full transition-all duration-500" />
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Proyecto Final ASIR: Sistema de control de acceso basado en Arduino y RFID RC522. Registro automático de asistencia y salidas con almacenamiento en tiempo real.
                    </p>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• Autenticación con tarjetas Mifare</li>
                      <li>• Almacenamiento en SD card con RTC DS3231</li>
                      <li>• Feedback visual (LEDs) y sonoro (Buzzer)</li>
                      <li>• Solución Low Cost para centros educativos</li>
                    </ul>
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-accent tracking-wider font-semibold">PROYECTO FINAL EN CURSO</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={200}>
              <div className="text-center">
                <Link 
                  href="/proyectos"
                  className="inline-block px-8 py-4 bg-accent text-slate-50 hover:bg-accent/90 transition-all duration-300 text-sm tracking-[0.1em] uppercase"
                >
                  Ver Todos los Proyectos
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sección de Timeline */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16 md:mb-24">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Mi Trayectoria
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-6">
                  El Camino Recorrido
                </h2>
                <div className="h-px w-24 bg-accent mx-auto" />
              </div>
            </RevealOnScroll>
            
            <Timeline />
          </div>
        </section>



        {/* Sección de contacto */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12 md:mb-16">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  Conectemos
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 mb-6">
                  Hablemos
                </h2>
                <div className="h-px w-24 bg-accent mx-auto mb-6" />
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Si buscas un profesional en administración de sistemas, infraestructura IT o desarrollo web, no dudes en contactarme.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </section>

        {/* Footer con redes sociales */}
        <footer className="py-12 md:py-16 px-4 md:px-8 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              {/* Redes sociales */}
              <RevealOnScroll>
                <div className="text-center space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-500">
                    Conecta conmigo
                  </p>
                  <SocialLinks />
                </div>
              </RevealOnScroll>
              
              {/* Copyright */}
              <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800 w-full">
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  © 2026 Oliver Dangelo Magallanes Espinoza
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  Infraestructura, redes y soluciones IT
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
