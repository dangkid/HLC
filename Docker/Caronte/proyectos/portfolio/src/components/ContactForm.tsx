"use client";

import { useState } from "react";
import { EmailIcon } from "./Icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Por ahora, simular envío (puedes integrar con un servicio real después)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 mb-4 md:mb-6">
            <EmailIcon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-slate-50 mb-3 md:mb-4">
            Contacta conmigo
          </h3>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            ¿Tienes un proyecto, idea o simplemente quieres charlar? Escríbeme
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-xs md:text-sm tracking-[0.1em] uppercase text-slate-600 dark:text-slate-400 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-accent focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm tracking-[0.1em] uppercase text-slate-600 dark:text-slate-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-accent focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="subject" className="block text-xs md:text-sm tracking-[0.1em] uppercase text-slate-600 dark:text-slate-400 mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-accent focus:outline-none transition-colors"
              placeholder="¿De qué quieres hablar?"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-xs md:text-sm tracking-[0.1em] uppercase text-slate-600 dark:text-slate-400 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-4 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-accent hover:text-slate-900 dark:hover:bg-accent dark:hover:text-slate-50 transition-all duration-300 text-sm md:text-base tracking-[0.1em] uppercase font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Enviar Mensaje"}
            {status === "sending" && "Enviando..."}
            {status === "sent" && "✓ Mensaje Enviado"}
            {status === "error" && "Error - Intenta de nuevo"}
          </button>

          {/* Mensaje de confirmación */}
          {status === "sent" && (
            <div className="text-center text-sm text-accent animate-fadeIn">
              ¡Gracias por tu mensaje! Te responderé pronto.
            </div>
          )}
        </form>

        {/* Contacto directo */}
        <div className="mt-8 pt-8 border-t border-slate-300 dark:border-slate-700 text-center">
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-500 mb-3">
            O escríbeme directamente a:
          </p>
          <a 
            href="mailto:dangelomagallanes1@gmail.com"
            className="text-sm md:text-base text-accent hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            dangelomagallanes1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
