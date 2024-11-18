"use client";

import React from "react";
import { User2, Trophy, Star, TrendingUp } from "lucide-react";
import { PlayerCard } from "@/components/cards/player-card";

export function PlayersSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <User2 className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold">Jugadores Destacados</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <PlayerCard
          icon={Trophy}
          title="Goleadores"
          description="Los máximos anotadores de la temporada"
          linkHref="/jugadores?filter=goleadores"
        />
        <PlayerCard
          icon={Star}
          title="Figuras"
          description="Los jugadores más destacados"
          linkHref="/jugadores?filter=destacados"
        />
        <PlayerCard
          icon={TrendingUp}
          title="Promesas"
          description="Los talentos emergentes del fútbol chileno"
          linkHref="/jugadores?filter=promesas"
        />
      </div>
    </section>
  );
}