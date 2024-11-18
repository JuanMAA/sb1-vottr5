"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { es } from 'date-fns/locale';
import { FilterWrapper } from "@/components/filters/filter-wrapper";

interface MatchesFilterProps {
  teams: string[];
  selectedTeam: string;
  onTeamChange: (team: string) => void;
  dateRange: [Date | undefined, Date | undefined];
  onDateRangeChange: (range: [Date | undefined, Date | undefined]) => void;
}

export function MatchesFilter({
  teams,
  selectedTeam,
  onTeamChange,
  dateRange,
  onDateRangeChange,
}: MatchesFilterProps) {
  const [startDate, endDate] = dateRange;

  return (
    <FilterWrapper>
      <Select value={selectedTeam} onValueChange={onTeamChange}>
        <SelectTrigger className="w-full md:w-[200px] bg-background">
          <SelectValue placeholder="Filtrar por equipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los equipos</SelectItem>
          {teams.map((team) => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full md:w-[200px] justify-start text-left font-normal bg-background",
                !startDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? (
                new Date(startDate).toLocaleDateString()
              ) : (
                "Fecha inicial"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={(date) => onDateRangeChange([date, endDate])}
              initialFocus
              locale={es}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full md:w-[200px] justify-start text-left font-normal bg-background",
                !endDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endDate ? (
                new Date(endDate).toLocaleDateString()
              ) : (
                "Fecha final"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={(date) => onDateRangeChange([startDate, date])}
              initialFocus
              locale={es}
              disabled={(date) => startDate ? date < startDate : false}
            />
          </PopoverContent>
        </Popover>

        {(startDate || endDate) && (
          <Button
            variant="ghost"
            className="px-3"
            onClick={() => onDateRangeChange([undefined, undefined])}
          >
            Limpiar
          </Button>
        )}
      </div>
    </FilterWrapper>
  );
}