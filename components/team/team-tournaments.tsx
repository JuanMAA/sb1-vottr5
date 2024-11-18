"use client";

import { Card } from "@/components/ui/card";
import type { Tournament } from "@/lib/teams-data";

interface TeamTournamentsProps {
  tournaments: Tournament[];
}

export function TeamTournaments({ tournaments }: TeamTournamentsProps) {
  return (
    <div className="space-y-4">
      {tournaments.map((tournament) => (
        <Card key={tournament.id} className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{tournament.name}</h3>
              <p className="text-muted-foreground">
                {tournament.season} {tournament.year}
              </p>
            </div>
            <div className="text-2xl font-bold text-red-600">
              {tournament.position}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{tournament.points}</div>
              <div className="text-sm text-muted-foreground">Puntos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{tournament.matches}</div>
              <div className="text-sm text-muted-foreground">Partidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{tournament.wins}</div>
              <div className="text-sm text-muted-foreground">Victorias</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{tournament.draws}</div>
              <div className="text-sm text-muted-foreground">Empates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">{tournament.losses}</div>
              <div className="text-sm text-muted-foreground">Derrotas</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}