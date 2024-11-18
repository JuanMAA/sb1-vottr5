"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Estadio Nacional"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-4">FutbolDigital.cl</h1>
        <p className="text-xl mb-8">La plataforma digital definitiva del fútbol chileno</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Explorar Equipos
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Ver Torneos
          </Button>
        </div>
      </div>
    </div>
  );
}