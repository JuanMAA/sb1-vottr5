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
  let copaChileWithTeams: any[] = [];
  let torneoNacionalWithTeams: any[] = [];

  const [{ data: teams, error: teamsError },
    { data: ccList, error: ccListError },
    { data: tnList, error: tnListError }] = await Promise.all([
      supabase.from('team').select('*'),
      supabase.from('tournament').select('*').eq('tournament_type', TournamentType.COPA_CHILE),
      supabase.from('tournament').select('*').eq('tournament_type', TournamentType.TORNEO_NACIONAL)
    ]);

  if (ccList && tnList) {
    const allTournamentNames = [
      ...ccList.map(t => t.name),
      ...tnList.map(t => t.name)
    ];

    const { data: matches, error: matchError } = await supabase
      .from('match')
      .select('tournament, away_team, local_team')
      .in('tournament', allTournamentNames);

    const addTeamsToTournaments = (tournamentList) => {
      return tournamentList.map(tournament => {
        const teams = new Set();

        matches?.forEach(match => {
          if (match.tournament === tournament.name) {
            teams.add(match.away_team);
            teams.add(match.local_team);
          }
        });
        return {
          ...tournament,
          teams: Array.from(teams)
        };
      });
    };
    copaChileWithTeams = addTeamsToTournaments(ccList);
    torneoNacionalWithTeams = addTeamsToTournaments(tnList);
  }
  
  const hasError = teamsError || ccListError || tnListError;
  const safeTeams = hasError ? [] : teams || [];
  const safeCcList = hasError ? [] : copaChileWithTeams || [];
  const safeTnList = hasError ? [] : torneoNacionalWithTeams || [];

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
