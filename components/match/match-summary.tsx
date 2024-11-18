import { Match } from '@/lib/tournament-data';
import { Card } from '@/components/ui/card';
import { Bot } from 'lucide-react';

interface MatchSummaryProps {
  match: Match;
}

export function MatchSummary({ match }: MatchSummaryProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Resumen del Partido
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Bot className="w-3.5 h-3.5" />
          <span>Generado por IA</span>
        </div>
      </div>
      <p className="text-base leading-relaxed">{match.summary}</p>
    </Card>
  );
}
