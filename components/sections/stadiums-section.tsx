"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const stadiums = [
  {
    name: "Estadio Monumental",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    capacity: "47.347 espectadores",
    team: "Colo-Colo"
  },
  {
    name: "Estadio Nacional",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    capacity: "48.665 espectadores",
    team: "Universidad de Chile"
  },
  {
    name: "San Carlos de Apoquindo",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    capacity: "20.000 espectadores",
    team: "Universidad Católica"
  }
];

export function StadiumsSection() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="w-8 h-8 text-red-600" />
        <h2 className="text-2xl font-bold">Estadios Principales</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {stadiums.map((stadium) => (
          <Card key={stadium.name} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={stadium.image}
                alt={stadium.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{stadium.name}</h3>
              <p className="text-sm text-muted-foreground">{stadium.capacity}</p>
              <p className="text-sm text-muted-foreground">Casa de {stadium.team}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}