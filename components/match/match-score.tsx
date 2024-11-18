import { Match } from "@/lib/tournament-data";
import { Card } from "@/components/ui/card";

interface MatchScoreProps {
  match: Match;
}

export function MatchScore({ match }: MatchScoreProps) {
  return (
    <Card className="p-8">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">{match.homeTeam}</div>
          <div className="text-6xl font-bold">{match.homeScore}</div>
        </div>
        <div className="text-4xl font-bold text-muted-foreground">vs</div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">{match.awayTeam}</div>
          <div className="text-6xl font-bold">{match.awayScore}</div>
        </div>
      </div>
    </Card>
  );
}