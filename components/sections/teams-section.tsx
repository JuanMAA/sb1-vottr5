"use client";

import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    name: "Colo-Colo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stats: "33 títulos nacionales"
  },
  {
    name: "Universidad de Chile",
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stats: "18 títulos nacionales"
  },
  {
    name: "Universidad Católica",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stats: "16 títulos nacionales"
  },
  {
    name: "Cobreloa",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stats: "8 títulos nacionales"
  }
];

export function TeamsSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold">Equipos Destacados</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {teams.map((team) => (
          <Link key={team.name} href={`/equipos/${team.name.toLowerCase()}`}>
            <Card className="relative h-48 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors">
                  {team.name}
                </h3>
                <p className="text-sm text-white/80">{team.stats}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}