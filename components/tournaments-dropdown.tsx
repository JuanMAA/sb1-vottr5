'use client';

import * as React from 'react';
import { Search, ChevronRight, Trophy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const tournamentsOld = [
  {
    id: 1,
    year: '24',
    name: 'Primera División 2024',
    season: 'Apertura',
    champion: 'Por definir',
  },
  {
    id: 2,
    year: '2023',
    name: 'Primera División 2023',
    season: 'Clausura',
    champion: 'Cobresal',
  },
  {
    id: 3,
    year: '2023',
    name: 'Primera División 2023',
    season: 'Apertura',
    champion: 'Huachipato',
  },
  {
    id: 4,
    year: '2022',
    name: 'Primera División 2022',
    season: 'Clausura',
    champion: 'Colo-Colo',
  },
  {
    id: 5,
    year: '2022',
    name: 'Primera División 2022',
    season: 'Apertura',
    champion: 'U. Católica',
  },
  {
    id: 6,
    year: '2021',
    name: 'Primera División 2021',
    season: 'Clausura',
    champion: 'U. Católica',
  },
  {
    id: 7,
    year: '2021',
    name: 'Primera División 2021',
    season: 'Apertura',
    champion: 'Colo-Colo',
  },
  {
    id: 8,
    year: '2020',
    name: 'Primera División 2020',
    season: 'Única',
    champion: 'U. Católica',
  },
  {
    id: 9,
    year: '2019',
    name: 'Primera División 2019',
    season: 'Única',
    champion: 'U. Católica',
  },
];

interface TournamentsDropdownProps {
  children: React.ReactNode;
  tournaments: any;
}

export function TournamentsDropdown({ children, tournaments }: TournamentsDropdownProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredTournaments, setFilteredTournaments] =
    React.useState(tournaments);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = tournaments.filter(
      (tournament) =>
        tournament?.year.includes(query) ||
        tournament?.name.toLowerCase().includes(query)
    );
    setFilteredTournaments(filtered);
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
                  placeholder="Buscar torneo..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {filteredTournaments.slice(0, 9).map((tournament) => (
                  <NavigationMenuLink asChild key={tournament.id}>
                    <a
                      href={`/torneos/${tournament.id}`}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-accent group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                        <span className="text-xs font-bold">
                          {tournament.year}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate group-hover:text-accent-foreground">
                          {tournament.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tournament.champion} Campeón
                        </div>
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </div>
              <Link
                href="/torneos"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent group w-full"
              >
                <span className="text-sm font-medium">
                  Ver todos los torneos
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
