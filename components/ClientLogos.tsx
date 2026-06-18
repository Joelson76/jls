"use client";

import { Building2, Stethoscope, Factory, Store, Briefcase, Truck } from "lucide-react";

export default function ClientLogos() {
  const clients = [
    { name: "Escritórios", icon: Briefcase },
    { name: "Clínicas", icon: Stethoscope },
    { name: "Indústrias", icon: Factory },
    { name: "Comércio", icon: Store },
    { name: "Empresas", icon: Building2 },
    { name: "Transportadoras", icon: Truck },
  ];

  return (
    <section className="py-16 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-400 font-medium mb-12 text-sm uppercase tracking-wider">
          Empresas que confiam na nossa estrutura
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 group"
              >
                <Icon
                  size={48}
                  className="text-gray-400 group-hover:text-accent transition-colors"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
