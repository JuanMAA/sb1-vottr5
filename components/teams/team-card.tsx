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

interface TeamCardProps {
  team: Team;
  onDivisionClick: (division: string) => void;
}

export function TeamCard({ team, onDivisionClick }: TeamCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48">
        <Image
          src={team.image}
          alt={team.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold text-white">{team.name}</h2>
            <Badge 
              variant={team.isActive ? "default" : "secondary"}
              className="ml-2"
            >
              {team.isActive ? "Activo" : `Inactivo desde ${team.lastActive}`}
            </Badge>
          </div>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {team.region}
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">División:</span>
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
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Fundado:</span>
            <span className="font-medium">{team.founded}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estadio:</span>
            <span className="font-medium">{team.stadium}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Títulos:</span>
            <span className="font-medium">{team.titles}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{team.description}</p>
      </div>
    </Card>
  );
}