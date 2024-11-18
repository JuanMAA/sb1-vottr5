"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar } from "lucide-react";
import Link from "next/link";
import type { Tournament } from "@/lib/tournament-data";

interface TournamentCardProps {
  tournament: Tournament;
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <span className="text-lg font-bold">{tournament.year}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold">{tournament.season} {tournament.year}</h2>
          <Badge 
            variant={tournament.champion === "Por definir" ? "default" : "secondary"}
            className="mt-1"
          >
            {tournament.champion === "Por definir" ? "En curso" : "Finalizado"}
          </Badge>
        </div>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground mb-4">
        <div className="flex justify-between">
          <span>Inicio:</span>
          <span>{tournament.startDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Fin:</span>
          <span>{tournament.endDate}</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            Campeón:
          </span>
          <span className="font-medium text-foreground">{tournament.champion}</span>
        </div>
      </div>

      <Link href={`/torneos/${tournament.id}`}>
        <Button className="w-full">Ver Detalles</Button>
      </Link>
    </Card>
  );
}