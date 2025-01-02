import { TeamPage } from "@/components/team/team-page";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/back-button";
import { createClient } from '@/utils/supabase/server';

function normalizeString(str: string) {
  return encodeURIComponent(str);  // Codifica correctamente los caracteres especiales
}

export async function generateStaticParams() {
  const supabase = createClient();
  const [{ data: allTeams, error: teamsError }] = await Promise.all([
    supabase.from('team').select('name')
  ]);
  return allTeams?.map((team) => ({
    name: normalizeString(team.name.toString()),
  }));
}

interface TeamPageProps {
  params: {
    name: string;
  };
}

export default async function Page({ params }: TeamPageProps) {
  const teamName = params.name;
  const supabase = createClient();
  const [{ data: team, error: teamsError }] = await Promise.all([
    supabase.from('team').select('*').eq('name', decodeURIComponent(teamName)).single()
  ]);

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
