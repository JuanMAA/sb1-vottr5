// page.tsx
import HomeComponent from '@/components/home';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase.from('todos').select();

  if (error) {
    console.error('Error fetching todos:', error);
  }

  return <HomeComponent />;
}
