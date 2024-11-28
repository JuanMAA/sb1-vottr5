// components/HomeComponent.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SearchableSelect } from '@/components/searchable-select';
import { tournaments } from '@/lib/tournament-data';
import Image from 'next/image';
import { TeamsSection } from '@/components/sections/teams-section';

const teams = [
  { id: 1, name: 'Colo-Colo', stadium: 'Estadio Monumental', founded: '1925' },
  { id: 2, name: 'Universidad de Chile', stadium: 'Estadio Nacional', founded: '1927' },
  { id: 3, name: 'Universidad Católica', stadium: 'San Carlos de Apoquindo', founded: '1937' },
  { id: 4, name: 'Cobreloa', stadium: 'Estadio Zorros del Desierto', founded: '1977' },
  { id: 5, name: 'Huachipato', stadium: 'Estadio CAP', founded: '1947' },
  { id: 6, name: 'Cobresal', stadium: 'Estadio El Cobre', founded: '1979' },
];

const players = [
  {
    id: 1,
    name: 'Arturo Vidal',
    teamId: 1,
    position: 'Mediocampista',
    number: '23',
    nationality: 'Chileno',
    birthdate: '1987-05-22',
    stats: { matches: 132, goals: 32, assists: 45 },
  },
  {
    id: 2,
    name: 'Marcelo Díaz',
    teamId: 2,
    position: 'Mediocampista',
    number: '21',
    nationality: 'Chileno',
    birthdate: '1986-12-30',
    stats: { matches: 145, goals: 15, assists: 38 },
  },
  {
    id: 3,
    name: 'Fernando Zampedri',
    teamId: 3,
    position: 'Delantero',
    number: '9',
    nationality: 'Argentino',
    birthdate: '1988-02-14',
    stats: { matches: 98, goals: 67, assists: 12 },
  },
];

export default function HomeComponent({ teams }) {
  const [selectedTournament, setSelectedTournament] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');

  const handleTournamentChange = (value: string) => {
    setSelectedTournament(value);
    setSelectedTeam('');
    setSelectedPlayer('');
  };

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
    setSelectedPlayer('');
  };

  const filteredTeams = teams;
  const filteredPlayers = selectedTeam
    ? players.filter((player) => player.teamId === parseInt(selectedTeam))
    : [];

  const getSelectedData = () => {
    if (selectedPlayer) {
      return {
        type: 'player',
        data: players.find((p) => p.id === parseInt(selectedPlayer)),
      };
    }
    if (selectedTeam) {
      return {
        type: 'team',
        data: teams.find((t) => t.id === parseInt(selectedTeam)),
      };
    }
    if (selectedTournament) {
      return {
        type: 'tournament',
        data: tournaments.find((t) => t.id === parseInt(selectedTournament)),
      };
    }
    return null;
  };

  return (
    <div>
      <Card className="relative p-8 mb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-background to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />

          {/* Animated Glow Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Stadium Image */}
          <Image
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Estadio"
            fill
            className="object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2
                hidden
                className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-300"
              >
                Explora el Fútbol Chileno
              </h2>
              <div className="h-1 w-1/3 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 flex flex-col items-center">
              <img
                src="img/logo.png"
                className="w-[100px] pb-5 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                alt=""
              />
              Descubre estadísticas, resultados y toda la información del
              fútbol nacional. Para comenzar, selecciona un torneo:
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="w-72">
                <SearchableSelect
                  value={selectedTournament}
                  onValueChange={handleTournamentChange}
                  placeholder="Seleccionar Torneo"
                  items={tournaments.map((t) => ({
                    value: t.id.toString(),
                    label: `${t.name} - ${t.season}`,
                    searchTerms: [t.name, t.season, t.year],
                  }))}
                />
              </div>

              {selectedTournament && (
                <div className="w-72 animate-in fade-in slide-in-from-top-4 duration-500">
                  <SearchableSelect
                    value={selectedTeam}
                    onValueChange={handleTeamChange}
                    placeholder="Seleccionar Equipo"
                    items={filteredTeams.map((t) => ({
                      value: t.id.toString(),
                      label: t.name,
                      searchTerms: [t.name],
                    }))}
                  />
                </div>
              )}

              {selectedTeam && false && (
                <div className="w-72 animate-in fade-in slide...">
                  {/* Add additional UI elements here if needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
