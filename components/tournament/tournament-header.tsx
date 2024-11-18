"use client";

import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Tournament } from "@/lib/tournament-data";

interface TournamentHeaderProps {
  tournament: Tournament;
}

export function TournamentHeader({ tournament }: TournamentHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{tournament.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant={tournament.status === "En curso" ? "default" : "secondary"}>
              {tournament.status}
            </Badge>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{tournament.season}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-card">
          <div className="text-sm text-muted-foreground">Inicio</div>
          <div className="font-medium mt-1">{tournament.startDate}</div>
        </div>
        <div className="p-4 rounded-lg bg-card">
          <div className="text-sm text-muted-foreground">Fin</div>
          <div className="font-medium mt-1">{tournament.endDate}</div>
        </div>
        <div className="p-4 rounded-lg bg-card">
          <div className="text-sm text-muted-foreground">Campeón</div>
          <div className="font-medium mt-1">{tournament.champion}</div>
        </div>
        <div className="p-4 rounded-lg bg-card">
          <div className="text-sm text-muted-foreground">Temporada</div>
          <div className="font-medium mt-1">{tournament.season} {tournament.year}</div>
        </div>
      </div>
    </div>
  );
}