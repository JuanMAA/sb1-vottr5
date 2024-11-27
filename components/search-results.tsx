"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Users, User2, Calendar, MapPin, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SearchResultsProps {
  data: {
    type: 'tournament' | 'team' | 'player';
    data: any;
  } | null;
}

export function SearchResults({ data }: SearchResultsProps) {
  if (!data) return null;

  const renderTournamentInfo = () => (
    <div className="max-w-6xl mx-auto">
      <Card className="p-8 sm:p-20 bg-white/50 dark:bg-gray-900/20 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full blur opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-full p-4">
              <Trophy className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{data.data.name}</h2>
            <p className="text-muted-foreground">{data.data.season}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Inicio", value: data.data.startDate },
            { label: "Fin", value: data.data.endDate },
            { label: "Campeón", value: data.data.champion },
            { label: "Estado", value: data.data.status || "En curso" }
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg bg-card text-card-foreground shadow-sm relative p-4 sm:p-10 sm:mb-5 overflow-hidden"
            >
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="font-medium mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        <Link href={`/torneos/${data.data.id}`}>
          <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
            Ver Detalles del Torneo
          </Button>
        </Link>
      </Card>
    </div>
  );

  const renderTeamInfo = () => (
    <div className="max-w-6xl mx-auto">
      <Card className="p-8 sm:p-20 bg-white/50 dark:bg-gray-900/20 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full blur opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-full p-4">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{data.data.name}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: MapPin, label: "Estadio", value: data.data.stadium },
            { icon: Calendar, label: "Fundación", value: data.data.founded }
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-card text-card-foreground shadow-sm relative p-4 sm:p-10 sm:mb-5 overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
              <div className="font-medium">{item.value}</div>
            </div>
          ))}
        </div>

        <Link href={`/equipos/${data.data.id}`}>
          <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
            Ver Perfil del Equipo
          </Button>
        </Link>
      </Card>
    </div>
  );

  const renderPlayerInfo = () => (
    <Card className="p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-0 shadow-lg">
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full blur opacity-50"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-full p-4">
            <User2 className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{data.data.name}</h2>
          <p className="text-muted-foreground">{data.data.position}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Partidos", value: data.data.stats.matches },
          { label: "Goles", value: data.data.stats.goals },
          { label: "Asistencias", value: data.data.stats.assists }
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-center">
            <div className="text-2xl font-bold mb-1">{item.value}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { icon: Flag, label: "Nacionalidad", value: data.data.nationality },
          { label: "Número", value: `#${data.data.number}` },
          { label: "Nacimiento", value: new Date(data.data.birthdate).toLocaleDateString() }
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              {item.icon && <item.icon className="w-4 h-4 text-muted-foreground" />}
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
            <div className="font-medium">{item.value}</div>
          </div>
        ))}
      </div>

      <Link href={`/jugadores/${data.data.id}`}>
        <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
          Ver Perfil del Jugador
        </Button>
      </Link>
    </Card>
  );

  return (
    <div className="space-y-4">
      {data.type === 'tournament' && renderTournamentInfo()}
      {data.type === 'team' && renderTeamInfo()}
      {data.type === 'player' && renderPlayerInfo()}
    </div>
  );
}