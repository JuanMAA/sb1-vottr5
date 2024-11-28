// app/page.tsx
import HomeComponent from '@/components/home';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  // Crea un cliente de Supabase sin depender de las cookies.
  const supabase = createClient();

  let { data: teams, error } = await supabase.from('team').select("*")

  if (error) {
    teams = [];
  }

  // Pasa los datos como props al componente de cliente.
  return <HomeComponent teams={teams} />;
}
