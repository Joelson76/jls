"use client";

import { Globe, Layout, Database } from "lucide-react";

export default function DevelopmentSection() {
  const projects = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Presença digital profissional com design moderno e responsivo para sua empresa.",
      tech: ["Next.js", "React", "Tailwind"],
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Layout,
      title: "Sistemas Web",
      description: "Aplicações personalizadas para gerenciar processos específicos do seu negócio.",
      tech: ["TypeScript", "Node.js", "PostgreSQL"],
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Database,
      title: "Sistemas de Gestão",
      description: "ERP, controle de estoque, financeiro e ordem de serviço sob medida.",
      tech: ["Python", "FastAPI", "React"],
      color: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section id="desenvolvimento" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Desenvolvimento de{" "}
            <span className="text-accent">Sites e Sistemas</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Criamos soluções digitais personalizadas que automatizam processos e
            impulsionam o crescimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-zinc-800 group-hover:bg-zinc-700 rounded-xl transition-colors">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 group-hover:bg-zinc-700 text-xs font-medium text-gray-300 rounded-full transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-zinc-950 font-semibold rounded-lg transition-all"
          >
            Preciso de um sistema personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
