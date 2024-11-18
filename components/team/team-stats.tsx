"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Target, Percent } from "lucide-react";

interface TeamStatsProps {
  stats: {
    goalsScored: number;
    goalsConceded: number;
    cleanSheets: number;
    possession: number;
    passAccuracy: number;
    shotsPerGame: number;
  };
  currentForm: ('W' | 'D' | 'L')[];
}

export function TeamStats({ stats, currentForm }: TeamStatsProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Estadísticas de la Temporada</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Goles a Favor</div>
            <div className="text-2xl font-bold">{stats.goalsScored}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Goles en Contra</div>
            <div className="text-2xl font-bold">{stats.goalsConceded}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Valla Invicta</div>
            <div className="text-2xl font-bold">{stats.cleanSheets}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Posesión</div>
            <div className="text-2xl font-bold">{stats.possession}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Precisión de Pases</div>
            <div className="text-2xl font-bold">{stats.passAccuracy}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Tiros por Partido</div>
            <div className="text-2xl font-bold">{stats.shotsPerGame}</div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Últimos 5 Partidos</h3>
        <div className="flex gap-2">
          {currentForm.map((result, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                result === 'W' ? 'bg-green-500 text-white' :
                result === 'D' ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}
            >
              {result}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}