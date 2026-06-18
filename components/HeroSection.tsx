"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-primary-dark">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Circuit SVG Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,100 L300,100 L300,300 L500,300 L500,500"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-accent"
          />
          <path
            d="M900,100 L700,100 L700,400 L500,400"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-accent"
          />
          <circle cx="500" cy="500" r="8" fill="currentColor" className="text-accent" />
          <circle cx="300" cy="300" r="6" fill="currentColor" className="text-accent" />
          <circle cx="700" cy="400" r="6" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-up text-balance">
            Tecnologia que faz sua{" "}
            <span className="text-accent">empresa funcionar</span>.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-up animate-delay-100 text-balance">
            Suporte técnico, infraestrutura profissional e sistemas sob medida
            para pequenas e médias empresas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up animate-delay-200">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-light text-zinc-950 font-semibold rounded-lg transition-all text-lg hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-zinc-950 text-white font-semibold rounded-lg transition-all text-lg"
            >
              Ver Serviços
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base animate-fade-up animate-delay-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-gray-300">+150 empresas atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-gray-300">+8 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-gray-300">Suporte local e remoto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
