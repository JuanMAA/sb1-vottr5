"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { TeamCard } from "@/components/teams/team-card";
import { TeamListItem } from "@/components/teams/team-list-item";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterWrapper } from "@/components/filters/filter-wrapper";
import { SearchInput } from "@/components/filters/search-input";
import { ViewToggle } from "@/components/ui/view-toggle";
import { AdBanner } from "@/components/ads/ad-banner";

export const teams = [
  {
    id: 1,
    name: "Colo-Colo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana",
    founded: "1925",
    stadium: "Estadio Monumental",
    division: "Primera División",
    titles: 33,
    description: "El equipo más laureado del fútbol chileno.",
    isActive: true
  },
  {
    id: 2,
    name: "Universidad de Chile",
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana",
    founded: "1927",
    stadium: "Estadio Nacional",
    division: "Primera División",
    titles: 18,
    description: "Uno de los clubes más populares de Chile.",
    isActive: true
  },
  {
    id: 3,
    name: "Universidad Católica",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Metropolitana",
    founded: "1937",
    stadium: "San Carlos de Apoquindo",
    division: "Primera División",
    titles: 16,
    description: "El tercer grande del fútbol chileno.",
    isActive: true
  },
  {
    id: 4,
    name: "Cobreloa",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Calama",
    founded: "1977",
    stadium: "Estadio Zorros del Desierto",
    division: "Primera División",
    titles: 8,
    description: "El equipo más importante del norte de Chile.",
    isActive: true
  },
  {
    id: 5,
    name: "Huachipato",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "Talcahuano",
    founded: "1947",
    stadium: "Estadio CAP",
    division: "Primera División",
    titles: 2,
    description: "El acero del sur.",
    isActive: true
  },
  {
    id: 6,
    name: "Cobresal",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    region: "El Salvador",
    founded: "1979",
    stadium: "Estadio El Cobre",
    division: "Primera División",
    titles: 1,
    description: "El equipo minero del norte.",
    isActive: true
  }
];

const divisions = {
  all: "all",
  primeraDiv: "Primera División",
  primeraB: "Primera B",
  segundaDiv: "Segunda División"
};

export default function TeamsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [divisionFilter, setDivisionFilter] = useState(searchParams.get("division") || divisions.all);
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleDivisionChange = (value: string) => {
    setDivisionFilter(value);
    if (value === divisions.all) {
      router.push("/equipos");
    } else {
      router.push(`/equipos?division=${encodeURIComponent(value)}`);
    }
  };

  const filteredTeams = teams.filter(team => {
    const matchesSearch = 
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      team.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDivision = divisionFilter === divisions.all || team.division === divisionFilter;
    return matchesSearch && matchesDivision;
  });

  return (
    <div className="content-padding">
      <AdBanner className="mb-8" />
      <div className="container">
        <FilterWrapper
          rightElement={<ViewToggle view={view} onViewChange={setView} />}
        >
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Buscar por nombre o región..."
          />
          <Select value={divisionFilter} onValueChange={handleDivisionChange}>
            <SelectTrigger className="w-[200px] bg-background">
              <SelectValue placeholder="Seleccionar división" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={divisions.all}>Todas las divisiones</SelectItem>
              <SelectItem value={divisions.primeraDiv}>Primera División</SelectItem>
              <SelectItem value={divisions.primeraB}>Primera B</SelectItem>
              <SelectItem value={divisions.segundaDiv}>Segunda División</SelectItem>
            </SelectContent>
          </Select>
        </FilterWrapper>

        {view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <Link key={team.id} href={`/equipos/${team.id}`} className="block">
                <TeamCard team={team} onDivisionClick={handleDivisionChange} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTeams.map((team) => (
              <Link key={team.id} href={`/equipos/${team.id}`} className="block">
                <TeamListItem team={team} onDivisionClick={handleDivisionChange} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}