"use client";

import { useState } from "react";
import { TournamentsList } from "@/components/tournaments/tournaments-list";
import { TournamentsFilters } from "@/components/tournaments/tournaments-filters";
import { ViewToggle } from "@/components/ui/view-toggle";
import { FilterWrapper } from "@/components/filters/filter-wrapper";
import { tournaments } from "@/lib/tournament-data";
import { AdBanner } from "@/components/ads/ad-banner";

export default function TournamentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("2024");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = 
      tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tournament.season.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.champion.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = yearFilter === "all" || tournament.year === yearFilter;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="container py-8">
      <AdBanner className="mb-8" />
      
      <FilterWrapper
        rightElement={<ViewToggle view={view} onViewChange={setView} />}
      >
        <TournamentsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          yearFilter={yearFilter}
          onYearChange={setYearFilter}
        />
      </FilterWrapper>

      <TournamentsList tournaments={filteredTournaments} view={view} />
      
      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}