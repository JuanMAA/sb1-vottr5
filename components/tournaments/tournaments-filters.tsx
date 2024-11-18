"use client";

import { FilterWrapper } from "@/components/filters/filter-wrapper";
import { SearchInput } from "@/components/filters/search-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TournamentsFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  yearFilter: string;
  onYearChange: (value: string) => void;
}

export function TournamentsFilters({
  searchQuery,
  onSearchChange,
  yearFilter,
  onYearChange
}: TournamentsFiltersProps) {
  const years = ["2024", "2023", "2022", "2021", "2020", "2019"];

  return (
    <FilterWrapper>
      <SearchInput
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Buscar por nombre, temporada o campeón..."
      />
      <Select value={yearFilter} onValueChange={onYearChange}>
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue placeholder="Año" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los años</SelectItem>
          {years.map(year => (
            <SelectItem key={year} value={year}>{year}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FilterWrapper>
  );
}