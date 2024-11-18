"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayerStats } from "@/components/player/player-stats";
import { PlayerInfo } from "@/components/player/player-info";
import { Trophy, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { TeamPlayer } from "@/lib/teams-data";

interface PlayerPageProps {
  player: TeamPlayer & {
    team: {
      id: number;
      name: string;
      image: string;
    };
  };
}

export function PlayerPage({ player }: PlayerPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href={`/equipos/${player.team.id}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Equipo
          </Button>
        </Link>

        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Left Column - Player Card */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">{player.name}</h1>
                  {player.isCaptain && (
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      Capitán
                    </Badge>
                  )}
                </div>
                <div className="text-lg text-muted-foreground mb-4">#{player.number} · {player.position}</div>
                <Link href={`/equipos/${player.team.id}`} className="inline-flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={player.team.image}
                      alt={player.team.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">{player.team.name}</span>
                </Link>
              </div>
            </Card>

            <PlayerInfo player={player} />
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <PlayerStats player={player} />
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-bold">Logros</h2>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>Contenido de logros del jugador próximamente...</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}