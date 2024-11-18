"use client";

import { Match } from "@/lib/tournament-data";
import { Card } from "@/components/ui/card";
import { Circle, Square, Flag, Timer, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MatchTimelineProps {
  match: Match;
}

export function MatchTimeline({ match }: MatchTimelineProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const selectedEvent = searchParams.get("event");
  const selectedMinute = searchParams.get("minute");
  const selectedPlayer = searchParams.get("player");

  const getGoalType = (type: 'normal' | 'penalty' | 'own-goal') => {
    switch (type) {
      case 'penalty':
        return '(Penal)';
      case 'own-goal':
        return '(Autogol)';
      default:
        return '';
    }
  };

  const events = [
    {
      id: 'start',
      minute: 0,
      type: 'marker' as const,
      icon: Flag,
      label: 'Inicio del Partido',
      description: 'Comienza el encuentro',
      className: 'text-blue-500'
    },
    ...match.goals.map(goal => ({
      ...goal,
      type: 'goal' as const,
      icon: Circle,
      label: goal.player,
      description: `¡GOL! ${goal.player} ${getGoalType(goal.type)}`,
      team: goal.team === 'home' ? match.homeTeam : match.awayTeam,
      className: 'text-green-500'
    })),
    ...match.cards.map(card => ({
      ...card,
      type: 'card' as const,
      icon: Square,
      label: card.player,
      description: `Tarjeta ${card.type === 'yellow' ? 'Amarilla' : 'Roja'} para ${card.player}`,
      team: card.team === 'home' ? match.homeTeam : match.awayTeam,
      className: card.type === 'yellow' ? 'text-yellow-500' : 'text-red-500'
    })),
    {
      id: 'end',
      minute: 90,
      type: 'marker' as const,
      icon: Timer,
      label: 'Final del Partido',
      description: 'Termina el encuentro',
      className: 'text-blue-500'
    }
  ].sort((a, b) => a.minute - b.minute);

  const handleEventClick = (event: any) => {
    if (event.type === 'marker') {
      router.push(`?event=${event.type}&minute=${event.minute}`);
    } else {
      router.push(`?event=${event.type}&minute=${event.minute}&player=${event.label}`);
    }
  };

  const isSelected = (event: any) => {
    if (event.type === 'marker') {
      return selectedEvent === event.type && selectedMinute === event.minute.toString();
    }
    return selectedEvent === event.type && 
           selectedMinute === event.minute.toString() && 
           selectedPlayer === event.label;
  };

  return (
    <TooltipProvider>
      <Card className="p-4 h-full">
        <div className="flex items-center gap-2 mb-4 px-2">
          <HelpCircle className="w-4 h-4 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">Simbología:</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Circle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Gol</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Tarjeta Amarilla</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4 text-red-500" />
              <span className="text-sm">Tarjeta Roja</span>
            </div>
          </div>
        </div>

        <div className="relative h-[calc(100%-2rem)]">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-border" />
          <div className="space-y-1 max-h-full overflow-y-auto">
            {events.map((event, index) => (
              <div key={`${event.type}-${event.id}`} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleEventClick(event)}
                      className={cn(
                        "w-full text-center py-1.5 hover:bg-accent rounded transition-colors",
                        isSelected(event) && "bg-accent"
                      )}
                    >
                      <div className="absolute left-1/2 -ml-3 w-6 h-6 flex items-center justify-center bg-background rounded-full border">
                        <event.icon className={cn("w-3.5 h-3.5", event.className)} />
                      </div>
                      <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 px-4">
                        {'team' in event && event.team === match.homeTeam ? (
                          <>
                            <div className="text-right">
                              <div className="text-sm">{event.label}</div>
                              <div className="text-xs text-muted-foreground">{event.description}</div>
                            </div>
                            <span className="font-medium text-xs">{event.minute}'</span>
                            <div />
                          </>
                        ) : 'team' in event && event.team === match.awayTeam ? (
                          <>
                            <div />
                            <span className="font-medium text-xs">{event.minute}'</span>
                            <div className="text-left">
                              <div className="text-sm">{event.label}</div>
                              <div className="text-xs text-muted-foreground">{event.description}</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div />
                            <div className="text-center">
                              <span className="font-medium text-xs">{event.minute}'</span>
                              <div className="text-xs text-muted-foreground">{event.description}</div>
                            </div>
                            <div />
                          </>
                        )}
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{event.description}</p>
                    <p className="text-xs text-muted-foreground">Minuto {event.minute}'</p>
                  </TooltipContent>
                </Tooltip>
                {index < events.length - 1 && (
                  <div className="absolute left-1/2 -ml-px w-px h-1 border-l border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
}