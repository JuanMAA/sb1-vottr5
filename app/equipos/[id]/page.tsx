import { teams } from "@/lib/teams-data";
import { TeamPage } from "@/components/team/team-page";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/back-button";

// Get all possible team IDs from both the teams data and the teams array in page.tsx
const allTeams = [
  { id: 1, name: "Colo-Colo", stadium: "Estadio Monumental", founded: "1925" },
  { id: 2, name: "Universidad de Chile", stadium: "Estadio Nacional", founded: "1927" },
  { id: 3, name: "Universidad Católica", stadium: "San Carlos de Apoquindo", founded: "1937" },
  { id: 4, name: "Cobreloa", stadium: "Estadio Zorros del Desierto", founded: "1977" },
  { id: 5, name: "Huachipato", stadium: "Estadio CAP", founded: "1947" },
  { id: 6, name: "Cobresal", stadium: "Estadio El Cobre", founded: "1979" },
  ...teams
];

// Remove duplicates based on ID
const uniqueTeams = Array.from(new Map(allTeams.map(team => [team.id, team])).values());

export function generateStaticParams() {
  return uniqueTeams.map((team) => ({
    id: team.id.toString(),
  }));
}

interface TeamPageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: TeamPageProps) {
  const teamId = parseInt(params.id);
  const team = uniqueTeams.find(t => t.id === teamId);

  if (!team) {
    notFound();
  }

  return (
    <div className="container py-8">
      <BackButton href="/equipos" label="Volver a Equipos" />
      <TeamPage team={team} />
    </div>
  );
}