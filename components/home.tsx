// components/HomeComponent.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { SearchableSelect } from '@/components/searchable-select';
import Image from 'next/image';

export default function HomeComponent({ teams, tournaments, cups }) {
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
    //setSelectedPlayer('');
  };

  const filteredTeams = teams;
  //const filteredPlayers = selectedTeam
  //  ? players.filter((player) => player.teamId === parseInt(selectedTeam))
  //  : [];

  const getSelectedData = () => {
    if (selectedPlayer) {
      return {
        type: 'player',
        data: players.find((p) => p.name === selectedPlayer),
      };
    }
    if (selectedTeam) {
      return {
        type: 'team',
        data: teams.find((t) => t.name === selectedTeam),
      };
    }
    if (selectedTournament) {
      return {
        type: 'tournament',
        data: tournaments.find((t) => t.name === selectedTournament),
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
                    value: t.name.toString(),
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
                    items={tournaments
                      .find((t) => t. name ==  selectedTournament)
                      ?.teams
                      .map((t) => ({
                        value: t.toString(),
                        label: t,
                        searchTerms: [t, t.toUpperCase(), t.toLowerCase()],
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
