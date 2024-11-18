import { Match } from "@/lib/tournament-data";
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

interface MatchHighlightsProps {
  match: Match;
}

export function MatchHighlights({ match }: MatchHighlightsProps) {
  if (!match.highlightsUrl) {
    return null;
  }

  return (
    <Card className="p-4 h-full bg-card/50 backdrop-blur-sm border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <Video className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Resumen en Video
        </h3>
      </div>
      <div className="relative pb-[56.25%] bg-black rounded-lg overflow-hidden">
        <iframe
          src={match.highlightsUrl}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}