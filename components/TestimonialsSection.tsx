"use client";

import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Carlos Mendes",
      role: "Diretor",
      company: "Clínica Santa Saúde",
      avatar: "CM",
      text: "A JLS implementou toda nossa infraestrutura de rede e servidores. Agora temos backup automático, sistema de agendamento integrado e segurança nos dados dos pacientes. Profissionalismo excepcional.",
      rating: 5,
    },
    {
      name: "Maria Silva",
      role: "Gerente de TI",
      company: "Transportadora Rápida",
      avatar: "MS",
      text: "Suporte técnico impecável! Sempre que precisamos, a equipe resolve rapidamente. Nosso sistema de rastreamento funciona 24/7 sem problemas graças ao trabalho deles.",
      rating: 5,
    },
    {
      name: "Roberto Costa",
      role: "Sócio",
      company: "Contabilidade Costa & Cia",
      avatar: "RC",
      text: "Desenvolveram um sistema de gestão sob medida para nosso escritório. Automatizou processos manuais e aumentou nossa produtividade em 40%. Recomendo fortemente!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            O que nossos <span className="text-accent">clientes dizem</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram sua TI conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="text-accent/30 mb-4" size={40} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                {/* Avatar */}
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>

                {/* Name and Company */}
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
