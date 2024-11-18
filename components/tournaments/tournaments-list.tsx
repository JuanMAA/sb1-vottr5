"use client";

import { Tournament } from "@/lib/tournament-data";
import { TournamentCard } from "@/components/tournaments/tournament-card";
import { TournamentListItem } from "@/components/tournaments/tournament-list-item";

interface TournamentsListProps {
  tournaments: Tournament[];
  view: "grid" | "list";
}

export function TournamentsList({ tournaments, view }: TournamentsListProps) {
  if (tournaments.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No se encontraron torneos que coincidan con los criterios de búsqueda.
      </div>
    );
  }

  return view === "grid" ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  ) : (
    <div className="space-y-4">
      {tournaments.map((tournament) => (
        <TournamentListItem key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
}