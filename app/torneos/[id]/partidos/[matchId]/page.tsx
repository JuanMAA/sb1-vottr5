import { tournaments } from '@/lib/tournament-data';
import { MatchSummary } from '@/components/match/match-summary';
import { MatchHeader } from '@/components/match/match-header';
import { MatchTimeline } from '@/components/match/match-timeline';
import { MatchHighlights } from '@/components/match/match-highlights';
import { notFound } from 'next/navigation';
import { BackButton } from '@/components/ui/back-button';
import { AdBanner } from '@/components/ads/ad-banner';

export function generateStaticParams() {
  return tournaments.flatMap((tournament) =>
    tournament.matches.map((match) => ({
      id: tournament.id.toString(),
      matchId: match.id.toString(),
    }))
  );
}

interface MatchPageProps {
  params: {
    id: string;
    matchId: string;
  };
}

export default function MatchPage({ params }: MatchPageProps) {
  const tournament = tournaments.find((t) => t.id === parseInt(params.id));
  const match = tournament?.matches.find(
    (m) => m.id === parseInt(params.matchId)
  );

  if (!tournament || !match) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdBanner className="mb-4" />
      <div className="container">
        <BackButton
          href={`/torneos/${tournament.id}`}
          label="Volver al Torneo"
        />
      </div>
      <MatchHeader tournament={tournament} match={match} />
      <div className="container py-8">
        <div className="space-y-8">
          <MatchSummary match={match} />
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
            <MatchTimeline match={match} />
            <MatchHighlights match={match} />
          </div>
        </div>
      </div>
      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}
