"use client";

import * as React from "react";
import { Search, ChevronRight, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

const teams = [
  {
    id: 1,
    name: "Colo-Colo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana"
  },
  {
    id: 2,
    name: "U. de Chile",
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana"
  },
  {
    id: 3,
    name: "U. Católica",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana"
  },
  {
    id: 4,
    name: "Cobreloa",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Calama"
  },
  {
    id: 5,
    name: "Everton",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Viña del Mar"
  },
  {
    id: 6,
    name: "Huachipato",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Talcahuano"
  },
  {
    id: 7,
    name: "Cobresal",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "El Salvador"
  },
  {
    id: 8,
    name: "Palestino",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana"
  },
  {
    id: 9,
    name: "Ñublense",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Chillán"
  }
];

interface TeamsDropdownProps {
  children: React.ReactNode;
}

export function TeamsDropdown({ children }: TeamsDropdownProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredTeams, setFilteredTeams] = React.useState(teams);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = teams.filter(
      team => team.name.toLowerCase().includes(query) || 
              team.region.toLowerCase().includes(query)
    );
    setFilteredTeams(filtered);
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
                  placeholder="Buscar equipo..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {filteredTeams.slice(0, 9).map((team) => (
                  <NavigationMenuLink asChild key={team.id}>
                    <a
                      href={`/equipos/${team.id}`}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-accent group"
                    >
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={team.image}
                          alt={team.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate group-hover:text-accent-foreground">
                          {team.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {team.region}
                        </div>
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </div>
              <Link 
                href="/equipos" 
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent group w-full"
              >
                <span className="text-sm font-medium">Ver todos los equipos</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}