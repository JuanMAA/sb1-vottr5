import { teams } from "@/lib/teams-data";
import { PlayerPage } from "@/components/player/player-page";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/back-button";

export function generateStaticParams() {
  const allPlayers = teams.flatMap((team) =>
    team.squad.map((player) => ({
      id: player.id.toString(),
    }))
  );
  
  return allPlayers;
}

interface PlayerPageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PlayerPageProps) {
  const player = teams.flatMap(team => 
    team.squad.map(player => ({
      ...player,
      team: {
        id: team.id,
        name: team.name,
        image: team.image
      }
    }))
  ).find(p => p.id === parseInt(params.id));

  if (!player) {
    notFound();
  }

  return (
    <div className="container py-8">
      <BackButton href="/jugadores" label="Volver a Jugadores" />
      <PlayerPage player={player} />
    </div>
  );
}