"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  nationality: string;
  image: string;
}

interface TeamSquadProps {
  squad: Player[];
}

export function TeamSquad({ squad }: TeamSquadProps) {
  const positions = ["Portero", "Defensa", "Mediocampista", "Delantero"];
  
  return (
    <div className="space-y-8">
      {positions.map(position => {
        const players = squad.filter(p => p.position === position);
        if (players.length === 0) return null;
        
        return (
          <div key={position}>
            <h3 className="text-lg font-semibold mb-4">{position}s</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {players.map(player => (
                <Card key={player.id} className="flex items-center p-4 gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={player.image}
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-muted-foreground">
                      #{player.number} · {player.nationality}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}