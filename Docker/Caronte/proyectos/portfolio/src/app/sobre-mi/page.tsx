"use client";

import Link from "next/link";
import { GraduationIcon, SparklesIcon, EmailIcon, LinkedinIcon, GithubIcon } from "@/components/Icons";
import SkillBar from "@/components/SkillBar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function SobreMi() {
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
            <Link href="/proyectos" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:tracking-wider">
              Proyectos
            </Link>
            <Link href="/sobre-mi" className="text-slate-900 dark:text-slate-100 font-medium">
              Sobre mí
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header minimalista */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 md:mb-6">
              Presentación
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-slate-50 mb-4 md:mb-6">
              Sobre mí
            </h1>
            <div className="h-px w-20 md:w-32 bg-accent mx-auto" />
          </div>

          {/* Contenido principal - Layout de dos columnas */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
            {/* Columna principal */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Introducción */}
              <div className="border-l-2 border-accent pl-4 md:pl-8">
                <h2 className="font-serif text-2xl md:text-4xl text-slate-900 dark:text-slate-50 mb-4 md:mb-6">
                  Hola, soy Oliver Dangelo Magallanes Espinoza
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Junior developer y estudiante de ASIR. Me apasiona el desarrollo web con React y Next.js, 
                  aprendiendo sobre ciberseguridad y sistemas. Interesado en crear soluciones útiles y aprender 
                  de expertos en la industria tech.
                </p>
              </div>

              {/* Sección ASIR */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="text-slate-600 dark:text-slate-400">
                    <GraduationIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Estudiante de ASIR
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed pl-10 md:pl-16">
                  Segundo año en Administración de Sistemas Informáticos en Red.
                  Especializado en infraestructura IT, redes empresariales, virtualización
                  con Docker/Kubernetes y automatización de configuraciones.
                </p>
                <div className="pl-10 md:pl-16 pt-3 md:pt-4 space-y-3">
                  <SkillBar skill="Linux & Bash" percentage={85} delay={100} />
                  <SkillBar skill="Redes & Cisco" percentage={78} delay={200} />
                  <SkillBar skill="Docker & Kubernetes" percentage={72} delay={300} />
                  <SkillBar skill="Ansible & Automatización" percentage={68} delay={400} />
                  <SkillBar skill="Seguridad IT" percentage={75} delay={500} />
                  <SkillBar skill="Cloud (AWS/Azure)" percentage={65} delay={600} />
                </div>
              </div>

              {/* Sección Desarrollo Web */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="text-slate-600 dark:text-slate-400">
                    <SparklesIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Desarrollo Web &amp; Vibecoding
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed pl-10 md:pl-16">
                  Me apasiona el vibecoding: entiendo el código y construyo soluciones rápidamente
                  con herramientas de IA. Desarrollo frontend con React, JavaScript, HTML, CSS,
                  Bootstrap y Sass. Disfruto crear proyectos funcionales y bien estructurados.
                </p>
              </div>

              {/* Valores profesionales */}
              <div className="p-6 md:p-8 bg-slate-100 dark:bg-slate-900 border-l-4 border-accent">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-slate-600 dark:text-slate-400">
                    <GraduationIcon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                    Mis Valores
                  </h3>
                </div>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    Soy una persona dedicada, paciente y muy empática. Creo en el aprendizaje
                    continuo y en la importancia de la comunicación efectiva dentro de un equipo.
                    Me adapto rápidamente a nuevos entornos y tecnologías, siempre buscando
                    la mejor solución para cada desafío técnico.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Dedicación</span>
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Paciencia</span>
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Empatía</span>
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Trabajo en equipo</span>
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Resolución de problemas</span>
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded">Adaptabilidad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:space-y-8">
              {/* Info rápida */}
              <div className="p-4 md:p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent mb-4 md:mb-6">
                  Info Rápida
                </h4>
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 dark:text-slate-500 mb-1">Educación</p>
                    <p className="text-slate-900 dark:text-slate-100">ASIR - 2º Año</p>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-slate-800" />
                  <div>
                    <p className="text-slate-500 dark:text-slate-500 mb-1">Pasiones</p>
                    <p className="text-slate-900 dark:text-slate-100">Infraestructura IT &amp; Vibecoding</p>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-slate-800" />
                  <div>
                    <p className="text-slate-500 dark:text-slate-500 mb-1">Ubicación</p>
                    <p className="text-slate-900 dark:text-slate-100">Huércal-Overa, Almería, España</p>
                  </div>
                </div>
              </div>

              {/* Quote profesional */}
              <div className="p-4 md:p-6 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900">
                <p className="font-serif text-base md:text-lg italic leading-relaxed">
                  &quot;La tecnología no es solo herramientas,
                  es la capacidad de resolver problemas reales&quot;
                </p>
                <p className="text-[10px] md:text-xs mt-3 md:mt-4 opacity-70">— Oliver Dangelo</p>
              </div>

              {/* Enlaces */}
              <div className="space-y-2 md:space-y-3">
                <a href="mailto:oliverdangelo.magallanes@gmail.com" className="flex items-center gap-3 p-3 md:p-4 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 transition-colors text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
                  <EmailIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Contacto</span>
                </a>
                <a href="https://www.linkedin.com/in/olivermagallanes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 transition-colors text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
                  <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">LinkedIn</span>
                </a>
                <a href="https://github.com/dangkid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 transition-colors text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
                  <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Nueva sección: Experiencia y Certificaciones */}
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 mb-8 md:mb-12 text-center">
              Formación y Experiencia
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Educación */}
              <div className="space-y-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Educación</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-xl md:text-2xl text-slate-900 dark:text-slate-50">
                        ASIR - Ciclo Superior
                      </h4>
                      <span className="text-xs text-slate-500">Actual</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      IES Cura Valera, Huércal-Overa, Almería
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Ago 2024 - Actual. Administración de Sistemas Informáticos en Red
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-xl md:text-2xl text-slate-900 dark:text-slate-50">
                        Desarrollo de Software
                      </h4>
                      <span className="text-xs text-slate-500">Abr 2023 - Actual</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Instituto San Ignacio de Loyola, Miraflores, Lima
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Formación en desarrollo de software y programación
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificaciones y Cursos */}
              <div className="space-y-6">
                <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Certificaciones y Cursos</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Ciberseguridad Avanzada
                      </h4>
                      <span className="text-xs text-accent">2025</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Virensis - IFCT0050 Entornos de tecnologías de operación
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Fundamentos de IA
                      </h4>
                      <span className="text-xs text-accent">Nov 2025</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      OpenWebinars - 7 horas (Machine Learning, Redes Neuronales, Python)
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        IT Essentials: PC Hardware
                      </h4>
                      <span className="text-xs text-accent">Cisco</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Cisco Networking Academy - Hardware y Software
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Introducción a Ciberseguridad
                      </h4>
                      <span className="text-xs text-accent">Cisco</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Cisco Networking Academy
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Fundamentos de JavaScript
                      </h4>
                      <span className="text-xs text-accent">2025</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      OpenWebinars - Programación web
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Sass/SCSS
                      </h4>
                      <span className="text-xs text-accent">2025</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      OpenWebinars - Preprocesador CSS
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        GitHub Foundations
                      </h4>
                      <span className="text-xs text-accent">Preparando</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      En proceso - Certificación oficial GitHub
                    </p>
                  </div>

                  <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-accent/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-50">
                        Certificado Profesional Google en Ciberseguridad
                      </h4>
                      <span className="text-xs text-accent">En curso</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Google / Coursera - Iniciado Ene 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experiencia profesional */}
            <div className="mt-12 md:mt-16 p-8 md:p-12 bg-slate-100 dark:bg-slate-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Experiencia</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base md:text-lg font-serif text-slate-900 dark:text-slate-50">Soporte Técnico Moodle</h4>
                    <span className="text-xs text-slate-500">Mar - Jun 2024</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Zoluciones - Lima, Perú</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Soporte académico y técnico en plataforma Moodle para UCAL, Toulouse Lautrec y CERTUS.
                    Resolución de incidencias, gestión de cursos, asistencia a estudiantes y docentes,
                    y garantía de experiencia óptima en la plataforma educativa.
                  </p>
                </div>
              </div>
            </div>

            {/* Habilidades técnicas */}
            <div className="mt-8 md:mt-12 p-8 md:p-12 bg-slate-100 dark:bg-slate-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Habilidades Técnicas</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">Desarrollo Web</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    React, JavaScript, HTML, CSS, Bootstrap, Sass, Vibecoding
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">DevOps & Cloud</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Docker, Kubernetes, AWS, Git
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">Redes</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Switches, Routers, Access Points, Cisco
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">Sistemas Operativos</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Windows, Linux, macOS, Active Directory
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">Bases de Datos</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    MySQL, SQL Server
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-2">Virtualización</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    VirtualBox, Docker, Moodle
                  </p>
                </div>
              </div>
            </div>

            {/* Competencias blandas */}
            <div className="mt-8 md:mt-12 p-8 md:p-12 bg-slate-100 dark:bg-slate-900 border-l-4 border-accent">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Competencias Blandas</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicación, paciencia, empatía, trabajo en equipo, resolución de problemas, atención al detalle, 
                comunicación efectiva, aprendizaje continuo, adaptabilidad y vibecoding.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
