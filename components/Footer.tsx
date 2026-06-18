"use client";

import Image from "next/image";
import { Share2, Briefcase, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Suporte Técnico", href: "#servicos" },
      { label: "Infraestrutura", href: "#infraestrutura" },
      { label: "Desenvolvimento", href: "#desenvolvimento" },
      { label: "Manutenção", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Como Funciona", href: "#" },
      { label: "Depoimentos", href: "#" },
      { label: "Contato", href: "#contato" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "#contato" },
      { label: "WhatsApp", href: "https://wa.me/5543991799911" },
      { label: "E-mail", href: "mailto:joelson76@gmail.com" },
      { label: "Telefone", href: "tel:+5543991799911" },
    ],
  };

  const socialLinks = [
    {
      icon: Share2,
      href: "https://instagram.com/jlstecnologia",
      label: "Instagram",
    },
    {
      icon: Briefcase,
      href: "https://linkedin.com/company/jlstecnologia",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/5543991799911",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="JLS Tecnologia"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-display font-bold">
                JLS <span className="text-accent">Tecnologia</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Tecnologia que faz sua empresa funcionar. Suporte, infraestrutura e
              desenvolvimento para PMEs em Cambé/PR e região.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-800 hover:bg-accent hover:text-zinc-950 rounded-lg flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Suporte
            </h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} JLS Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
