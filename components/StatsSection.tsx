"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  prefix?: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    { value: 150, label: "Empresas Atendidas", suffix: "+", prefix: "" },
    { value: 8, label: "Anos de Experiência", suffix: "+", prefix: "" },
    { value: 98, label: "Clientes Satisfeitos", suffix: "%", prefix: "" },
    { value: 24, label: "Tempo Médio de Resolução", suffix: "h", prefix: "" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  stat,
  isVisible,
  delay,
}: {
  stat: Stat;
  isVisible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm sm:text-base text-blue-200 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
