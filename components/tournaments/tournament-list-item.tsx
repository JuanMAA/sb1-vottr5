"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar } from "lucide-react";
import Link from "next/link";
import type { Tournament } from "@/lib/tournament-data";

interface TournamentListItemProps {
  tournament: Tournament;
}

export function TournamentListItem({ tournament }: TournamentListItemProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0">
          <span className="text-lg font-bold">{tournament.year}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold truncate">
              {tournament.season} {tournament.year}
            </h2>
            <Badge 
              variant={tournament.champion === "Por definir" ? "default" : "secondary"}
              className="ml-2 flex-shrink-0"
            >
              {tournament.champion === "Por definir" ? "En curso" : "Finalizado"}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{tournament.startDate} - {tournament.endDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>Campeón: {tournament.champion}</span>
            </div>
          </div>

          <Link href={`/torneos/${tournament.id}`}>
            <Button variant="outline" className="w-full">Ver Detalles</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}