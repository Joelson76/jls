"use client";

import { Check } from "lucide-react";

export default function InfrastructureSection() {
  const features = [
    "Servidores Windows e Linux",
    "Active Directory e GPO",
    "Rede cabeada e Wi-Fi corporativo",
    "File Server e backup automatizado",
    "VPN e segurança de perímetro",
  ];

  return (
    <section id="infraestrutura" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Infraestrutura que{" "}
              <span className="text-accent">sustenta sua operação</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Planejamos, implementamos e gerenciamos toda a infraestrutura de TI
              da sua empresa com segurança e eficiência.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-accent" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-zinc-950 font-semibold rounded-lg transition-all"
            >
              Quero um projeto de infraestrutura
            </a>
          </div>

          {/* Right Column - Network Diagram SVG */}
          <div className="relative">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-700"
                opacity="0.3"
              />

              {/* Central Server */}
              <g>
                <rect
                  x="170"
                  y="170"
                  width="60"
                  height="60"
                  rx="8"
                  fill="currentColor"
                  className="text-accent"
                />
                <text
                  x="200"
                  y="205"
                  textAnchor="middle"
                  className="fill-zinc-950 text-xs font-bold"
                >
                  Server
                </text>
              </g>

              {/* Connection Lines */}
              <line
                x1="200"
                y1="170"
                x2="200"
                y2="80"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
                opacity="0.6"
              />
              <line
                x1="230"
                y1="190"
                x2="320"
                y2="140"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
                opacity="0.6"
              />
              <line
                x1="230"
                y1="210"
                x2="320"
                y2="260"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
                opacity="0.6"
              />
              <line
                x1="170"
                y1="190"
                x2="80"
                y2="140"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
                opacity="0.6"
              />
              <line
                x1="170"
                y1="210"
                x2="80"
                y2="260"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
                opacity="0.6"
              />

              {/* Top - Cloud/Internet */}
              <g>
                <circle
                  cx="200"
                  cy="60"
                  r="20"
                  fill="currentColor"
                  className="text-zinc-700"
                />
                <text
                  x="200"
                  y="65"
                  textAnchor="middle"
                  className="fill-white text-xs font-semibold"
                >
                  WAN
                </text>
              </g>

              {/* Right Top - Workstation */}
              <g>
                <rect
                  x="300"
                  y="120"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  className="text-zinc-700"
                />
                <text
                  x="320"
                  y="145"
                  textAnchor="middle"
                  className="fill-white text-[10px]"
                >
                  PC
                </text>
              </g>

              {/* Right Bottom - Workstation */}
              <g>
                <rect
                  x="300"
                  y="240"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  className="text-zinc-700"
                />
                <text
                  x="320"
                  y="265"
                  textAnchor="middle"
                  className="fill-white text-[10px]"
                >
                  PC
                </text>
              </g>

              {/* Left Top - Printer */}
              <g>
                <rect
                  x="60"
                  y="120"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  className="text-zinc-700"
                />
                <text
                  x="80"
                  y="145"
                  textAnchor="middle"
                  className="fill-white text-[10px]"
                >
                  Print
                </text>
              </g>

              {/* Left Bottom - NAS */}
              <g>
                <rect
                  x="60"
                  y="240"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  className="text-zinc-700"
                />
                <text
                  x="80"
                  y="265"
                  textAnchor="middle"
                  className="fill-white text-[10px]"
                >
                  NAS
                </text>
              </g>

              {/* Pulse effect on server */}
              <circle cx="200" cy="200" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent animate-pulse" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
