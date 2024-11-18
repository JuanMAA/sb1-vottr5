"use client";

import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Trophy {
  id: number;
  name: string;
  year: string;
  competition: string;
}

interface TeamTrophiesProps {
  trophies: Trophy[];
}

export function TeamTrophies({ trophies }: TeamTrophiesProps) {
  const groupedTrophies = trophies.reduce((acc, trophy) => {
    if (!acc[trophy.competition]) {
      acc[trophy.competition] = [];
    }
    acc[trophy.competition].push(trophy);
    return acc;
  }, {} as Record<string, Trophy[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedTrophies).map(([competition, trophies]) => (
        <Card key={competition} className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold">{competition}</h2>
            <span className="text-muted-foreground">
              ({trophies.length} {trophies.length === 1 ? 'título' : 'títulos'})
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trophies.map((trophy) => (
              <Card key={trophy.id} className="p-4">
                <div className="font-semibold">{trophy.name}</div>
                <div className="text-sm text-muted-foreground">{trophy.year}</div>
              </Card>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}