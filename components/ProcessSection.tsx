"use client";

import { Search, FileText, Cog, HeadphonesIcon } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico Gratuito",
      description: "Analisamos suas necessidades e identificamos os pontos críticos da sua infraestrutura.",
    },
    {
      icon: FileText,
      title: "Proposta Técnica",
      description: "Apresentamos uma solução personalizada com escopo detalhado e valores transparentes.",
    },
    {
      icon: Cog,
      title: "Execução do Serviço",
      description: "Nossa equipe executa o projeto com qualidade e no prazo acordado.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Pós-Atendimento",
      description: "Garantimos suporte contínuo para que tudo funcione perfeitamente.",
    },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Como <span className="text-accent">Funciona</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Um processo simples e transparente do diagnóstico ao suporte contínuo
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent transform -translate-y-1/2" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/50">
                        <Icon size={32} className="text-zinc-950" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/50">
                      <Icon size={24} className="text-zinc-950" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-accent to-primary mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
