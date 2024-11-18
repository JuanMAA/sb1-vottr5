"use client";

import * as React from "react";
import { Search, ChevronRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const players = [
  {
    id: 1,
    name: "Arturo Vidal",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Colo-Colo",
    position: "Mediocampista"
  },
  {
    id: 2,
    name: "Alexis Sánchez",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Inter Miami",
    position: "Delantero"
  },
  {
    id: 3,
    name: "Charles Aránguiz",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Internacional",
    position: "Mediocampista"
  },
  {
    id: 4,
    name: "Ben Brereton",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Sheffield United",
    position: "Delantero"
  },
  {
    id: 5,
    name: "Claudio Bravo",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Real Betis",
    position: "Portero"
  },
  {
    id: 6,
    name: "Gary Medel",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Vasco da Gama",
    position: "Defensa"
  },
  {
    id: 7,
    name: "Eduardo Vargas",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Atlético Mineiro",
    position: "Delantero"
  },
  {
    id: 8,
    name: "Guillermo Maripán",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "AS Monaco",
    position: "Defensa"
  },
  {
    id: 9,
    name: "Marcelino Núñez",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    team: "Norwich City",
    position: "Mediocampista"
  }
];

interface PlayersDropdownProps {
  children: React.ReactNode;
}

export function PlayersDropdown({ children }: PlayersDropdownProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredPlayers, setFilteredPlayers] = React.useState(players);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = players.filter(
      player => 
        player.name.toLowerCase().includes(query) || 
        player.team.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query)
    );
    setFilteredPlayers(filtered);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {children}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] p-4">
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar jugador..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {filteredPlayers.slice(0, 9).map((player) => (
                  <NavigationMenuLink asChild key={player.id}>
                    <a
                      href={`/jugadores/${player.id}`}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-accent group"
                    >
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={player.image}
                          alt={player.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate group-hover:text-accent-foreground">
                          {player.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {player.position} · {player.team}
                        </div>
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </div>
              <Link 
                href="/jugadores" 
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent group w-full"
              >
                <span className="text-sm font-medium">Ver todos los jugadores</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}