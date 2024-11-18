import { Card } from "@/components/ui/card";
import { Trophy, Target, Award } from "lucide-react";
import type { TeamPlayer } from "@/lib/teams-data";

interface PlayerStatsProps {
  player: TeamPlayer;
}

export function PlayerStats({ player }: PlayerStatsProps) {
  const stats = [
    {
      label: "Partidos",
      value: player.appearances,
      icon: Trophy,
      color: "text-blue-600"
    },
    {
      label: "Goles",
      value: player.goals,
      icon: Target,
      color: "text-green-600"
    },
    {
      label: "Promedio",
      value: ((player.goals / player.appearances) || 0).toFixed(2),
      icon: Award,
      color: "text-purple-600"
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">Estadísticas</h2>
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-card mb-2 ${stat.color.replace('text-', 'text-opacity-10 bg-')}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}