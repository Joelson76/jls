"use client";

import { Award, Target, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Transparência",
      description: "Orçamentos claros e comunicação honesta em cada etapa do projeto.",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Respostas rápidas e soluções eficientes para minimizar seu tempo de parada.",
    },
    {
      icon: Target,
      title: "Compromisso",
      description: "Dedicação total ao sucesso tecnológico da sua empresa.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 border border-zinc-800">
              <Image
                src="/images/logo.jpg"
                alt="JLS Tecnologia"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-zinc-950 px-6 py-4 rounded-xl shadow-xl">
              <div className="text-3xl font-display font-bold">+8</div>
              <div className="text-sm font-semibold">Anos de Mercado</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Sobre a <span className="text-accent">JLS Tecnologia</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                Fundada por técnicos com experiência real em infraestrutura e
                desenvolvimento, a JLS Tecnologia nasceu para atender pequenas e
                médias empresas que precisam de soluções profissionais sem
                complicação.
              </p>
              <p>
                Atuamos presencialmente em <strong className="text-white">Cambé/PR</strong> e
                região, além de oferecer suporte remoto para todo o Brasil.
                Nossa missão é fazer a tecnologia trabalhar a favor do seu
                negócio, não contra ele.
              </p>
              <p>
                Com mais de 150 empresas atendidas, construímos uma reputação
                sólida baseada em confiança, qualidade técnica e suporte
                dedicado.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-4">
                Nossos Valores
              </h3>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
