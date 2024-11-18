"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Team {
  id: number;
  name: string;
  image: string;
  region: string;
  founded: string;
  stadium: string;
  division: string;
  titles: number;
  description: string;
  isActive: boolean;
  lastActive?: string;
}

interface TeamListItemProps {
  team: Team;
  onDivisionClick: (division: string) => void;
}

export function TeamListItem({ team, onDivisionClick }: TeamListItemProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={team.image}
            alt={team.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold truncate">{team.name}</h2>
            <Badge 
              variant={team.isActive ? "default" : "secondary"}
              className="ml-2 flex-shrink-0"
            >
              {team.isActive ? "Activo" : `Inactivo desde ${team.lastActive}`}
            </Badge>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {team.stadium}, {team.region}
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 hover:bg-transparent"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onDivisionClick(team.division);
              }}
            >
              <Badge variant="outline" className="hover:bg-accent">
                {team.division}
              </Badge>
            </Button>
            <span className="text-muted-foreground">
              {team.titles} títulos
            </span>
            <span className="text-muted-foreground">
              Fundado en {team.founded}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}