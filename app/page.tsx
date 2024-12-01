// app/page.tsx
import HomeComponent from '@/components/home';
import { createClient } from '@/utils/supabase/server';
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

export default async function Home() {
  // Crea un cliente de Supabase sin depender de las cookies.
  const supabase = createClient();

  let { data: teams, error } = await supabase
    .from('team')
    .select('name, logo, region');

  if (error) {
    teams = [];
  }

  // Pasa los datos como props al componente de cliente.
  return <>
    <MainNav teams={teams} />
    <HomeComponent teams={teams} />
    <Footer />
  </>;
}
