"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, Trophy } from "lucide-react";

interface TeamOverviewProps {
  team: {
    description: string;
    stadium: string;
    founded: string;
    manager: string;
    titles: number;
  };
}

export function TeamOverview({ team }: TeamOverviewProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="text-lg leading-relaxed">{team.description}</p>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Estadio</span>
          </div>
          <div className="font-medium">{team.stadium}</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Fundación</span>
          </div>
          <div className="font-medium">{team.founded}</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Director Técnico</span>
          </div>
          <div className="font-medium">{team.manager}</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Títulos</span>
          </div>
          <div className="font-medium">{team.titles}</div>
        </Card>
      </div>
    </div>
  );
}