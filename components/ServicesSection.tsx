"use client";

import { Monitor, Network, Code, ArrowRight, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Suporte & Informática",
      subtitle: "Seu computador travando? Resolvemos.",
      features: [
        "Formatação e reinstalação de sistemas",
        "Configuração de computadores e notebooks",
        "Manutenção preventiva e corretiva",
        "Suporte técnico presencial e remoto",
      ],
      color: "from-blue-500/20 to-primary/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Network,
      title: "Infraestrutura de TI",
      subtitle: "Redes, servidores e arquivos com segurança.",
      features: [
        "Projetos de rede cabeada e Wi-Fi",
        "Servidores Windows e Linux",
        "Active Directory e GPO",
        "Backup e recuperação de dados",
      ],
      color: "from-accent/20 to-cyan-500/20",
      iconColor: "text-accent",
    },
    {
      icon: Code,
      title: "Sites & Sistemas",
      subtitle: "Sua empresa no digital com tecnologia sob medida.",
      features: [
        "Sites institucionais modernos",
        "Sistemas web personalizados",
        "Sistemas de gestão (ERP, estoque)",
        "Integração com APIs e serviços",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluções completas de tecnologia para manter sua empresa sempre funcionando
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:border-zinc-700 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-zinc-800 group-hover:bg-zinc-700 rounded-xl transition-colors">
                      <Icon size={32} className={service.iconColor} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-400 mb-6">{service.subtitle}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
                  >
                    Saiba mais <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
