import { tournaments } from "@/lib/tournament-data";
import { TournamentMatches } from "@/components/tournament/tournament-matches";
import { TournamentHeader } from "@/components/tournament/tournament-header";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/back-button";
import { AdBanner } from "@/components/ads/ad-banner";

export function generateStaticParams() {
  // Get all possible tournament IDs from the data
  const allTournamentIds = tournaments.map((tournament) => ({
    id: tournament.id.toString(),
  }));

  // Add any additional tournament IDs that might be referenced but not in the main data
  const additionalIds = ["7", "8", "9"]; // Add any other IDs that might be referenced
  const extraParams = additionalIds.map(id => ({ id }));

  return [...allTournamentIds, ...extraParams];
}

interface TournamentPageProps {
  params: {
    id: string;
  };
}

export default function TournamentPage({ params }: TournamentPageProps) {
  const tournament = tournaments.find(t => t.id === parseInt(params.id));

  if (!tournament) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AdBanner className="mb-4" />
      <div className="container py-8">
        <BackButton href="/torneos" label="Volver a Torneos" />
        <TournamentHeader tournament={tournament} />
        <TournamentMatches 
          matches={tournament.matches} 
          tournamentId={tournament.id} 
        />
      </div>
      <AdBanner className="mt-8" slot="bottom" />
    </div>
  );
}