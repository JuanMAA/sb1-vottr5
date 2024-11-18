"use client";

import { useState } from "react";
import { Match } from "@/lib/tournament-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MatchesFilter } from "@/components/tournament/matches-filter";
import Link from "next/link";

interface TournamentMatchesProps {
  matches: Match[];
  tournamentId: number;
}

export function TournamentMatches({ matches, tournamentId }: TournamentMatchesProps) {
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined]);

  const filteredMatches = matches.filter(match => {
    const matchesTeam = selectedTeam === "all" || 
      match.homeTeam === selectedTeam || 
      match.awayTeam === selectedTeam;

    const matchDate = new Date(match.date);
    const matchesDateRange = 
      (!dateRange[0] || matchDate >= dateRange[0]) &&
      (!dateRange[1] || matchDate <= dateRange[1]);

    return matchesTeam && matchesDateRange;
  });

  if (matches.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-center text-muted-foreground">No hay partidos disponibles para este torneo.</p>
      </Card>
    );
  }

  // Get unique teams from matches
  const teams = Array.from(new Set(
    matches.flatMap(match => [match.homeTeam, match.awayTeam])
  )).sort();

  return (
    <div className="space-y-6">
      <MatchesFilter
        teams={teams}
        selectedTeam={selectedTeam}
        onTeamChange={setSelectedTeam}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      <div className="space-y-4">
        {filteredMatches.map((match) => (
          <Card key={match.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">
                  {new Date(match.date).toLocaleDateString('es-CL', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="text-lg font-semibold">
                  {match.homeTeam} vs {match.awayTeam}
                </div>
                <div className="text-sm text-muted-foreground">
                  {match.stadium} · {match.referee}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold px-4 py-2 rounded-lg bg-accent/50">
                  {match.homeScore !== undefined ? `${match.homeScore} - ${match.awayScore}` : "vs"}
                </div>
                <Link href={`/torneos/${tournamentId}/partidos/${match.id}`}>
                  <Button>Ver Detalle</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}

        {filteredMatches.length === 0 && (
          <Card className="p-6">
            <p className="text-center text-muted-foreground">
              No se encontraron partidos con los filtros seleccionados.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}