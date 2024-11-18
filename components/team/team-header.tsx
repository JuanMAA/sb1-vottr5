"use client";

import Image from "next/image";

interface TeamHeaderProps {
  team: {
    name: string;
    image: string;
    stadium: string;
    founded: string;
    region: string;
  };
}

export function TeamHeader({ team }: TeamHeaderProps) {
  return (
    <div className="relative h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={team.image}
          alt={team.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex items-end pb-8">
        <div className="flex items-center gap-6 text-white">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={team.image}
              alt={`${team.name} logo`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
            <div className="flex items-center gap-2 text-white/80">
              <span>{team.stadium}</span>
              <span>•</span>
              <span>Fundado en {team.founded}</span>
              <span>•</span>
              <span>{team.region}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}