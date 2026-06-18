"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp integration
    const whatsappMessage = `
Olá! Vim através do site.
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/5543991679911?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Pronto para resolver seus problemas de TI{" "}
            <span className="text-accent">de uma vez por todas?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="(43) 99999-9999"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tipo de Serviço
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Suporte Técnico">Suporte Técnico</option>
                  <option value="Infraestrutura">Infraestrutura de TI</option>
                  <option value="Desenvolvimento">Desenvolvimento de Sites/Sistemas</option>
                  <option value="Manutenção">Manutenção Preventiva</option>
                  <option value="Consultoria">Consultoria em TI</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-zinc-950 font-semibold rounded-lg transition-all hover:scale-105"
              >
                Enviar Solicitação
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-gray-400">
                      Cambé, Paraná<br />
                      Atendimento presencial e remoto
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-gray-400">
                      (43) 9 9167-9911<br />
                      WhatsApp disponível
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-gray-400">
                      joelson76@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-4">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-white font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white font-medium">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
                <div className="pt-3 mt-3 border-t border-zinc-800">
                  <p className="text-accent font-medium">
                    Suporte emergencial 24/7 disponível
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
