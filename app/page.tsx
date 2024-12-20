import HomeComponent from '@/components/home';
import { createClient } from '@/utils/supabase/server';
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

const TournamentType = {
  COPA_CHILE: 'copa_chile',
  TORNEO_NACIONAL: 'torneo_nacional',
};

export default async function Home() {
  const supabase = createClient();

  const [{ data: teams, error: teamsError },
    { data: ccList, error: ccListError },
    { data: tnList, error: tnListError }] = await Promise.all([
      supabase.from('team').select('name, logo, region'),
      supabase.from('tournament').select('*').eq('tournament_type', TournamentType.COPA_CHILE),
      supabase.from('tournament').select('*').eq('tournament_type', TournamentType.TORNEO_NACIONAL)
    ]);

  const hasError = teamsError || ccListError || tnListError;
  const safeTeams = hasError ? [] : teams || [];
  const safeCcList = hasError ? [] : ccList || [];
  const safeTnList = hasError ? [] : tnList || [];

  return (
    <>
      <MainNav
        teams={safeTeams}
        cups={safeCcList}
        tournaments={safeTnList} />
      <HomeComponent
        teams={safeTeams}
        cups={safeCcList}
        tournaments={safeTnList} />
      <Footer />
    </>
  );
}
