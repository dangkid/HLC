"use client";

import { useEffect, useState } from "react";
import { FiLock, FiShield, FiAward, FiBriefcase, FiMonitor, FiGlobe } from "react-icons/fi";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: "2026",
    title: "Certificado Google Ciberseguridad",
    description: "Certificado Profesional de Google en Ciberseguridad a través de Coursera. Seguridad de redes, gestión de riesgos y respuesta a incidentes.",
    icon: <FiLock className="w-6 h-6" />
  },
  {
    year: "2025",
    title: "Ciberseguridad Avanzada - Virensis",
    description: "IFCT0050 - Formación avanzada de 120 horas en ciberseguridad industrial y entornos OT. Financiado por NextGenerationEU y SEPE.",
    icon: <FiShield className="w-6 h-6" />
  },
  {
    year: "2024",
    title: "ASIR - IES Cura Valera",
    description: "Inicio del Ciclo Superior en Administración de Sistemas Informáticos en Red en Huércal-Overa, Almería, España.",
    icon: <FiAward className="w-6 h-6" />
  },
  {
    year: "2024",
    title: "Soporte Técnico Moodle - Zoluciones",
    description: "Soporte técnico y académico en plataforma Moodle para UCAL, Toulouse Lautrec y CERTUS. Resolución de incidencias y gestión de cursos.",
    icon: <FiBriefcase className="w-6 h-6" />
  },
  {
    year: "2023",
    title: "Desarrollo de Software - ISIL",
    description: "Inicio de estudios en Desarrollo de Software en el Instituto San Ignacio de Loyola, Lima, Perú.",
    icon: <FiMonitor className="w-6 h-6" />
  },
  {
    year: "2023",
    title: "Cisco Networking Academy",
    description: "IT Essentials: PC Hardware and Software + Introducción a la Ciberseguridad. Fundamentos sólidos en infraestructura IT.",
    icon: <FiGlobe className="w-6 h-6" />
  }
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="space-y-12 md:space-y-16">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={`flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Contenido */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`inline-block p-6 md:p-8 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent transition-colors ${
                  index % 2 === 0 ? 'ml-16 md:ml-0' : 'ml-16 md:ml-0'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                          {item.title}
                        </h3>
                        <span className="text-2xl">{item.icon}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                          {item.title}
                        </h3>
                      </>
                    )}
                  </div>
                  <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-accent mb-4">
                    {item.year}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Punto central */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-slate-50 dark:border-slate-950 z-10" />

              {/* Espaciador invisible para grid */}
              <div className="hidden md:block flex-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
