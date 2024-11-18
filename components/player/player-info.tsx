import { Card } from "@/components/ui/card";
import { Flag, Calendar, MapPin } from "lucide-react";
import type { TeamPlayer } from "@/lib/teams-data";

interface PlayerInfoProps {
  player: TeamPlayer;
}

export function PlayerInfo({ player }: PlayerInfoProps) {
  const info = [
    {
      label: "Nacionalidad",
      value: player.nationality,
      icon: Flag
    },
    {
      label: "Edad",
      value: `${player.age} años`,
      icon: Calendar
    },
    {
      label: "Posición",
      value: player.position,
      icon: MapPin
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Información Personal</h2>
      <div className="space-y-4">
        {info.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}