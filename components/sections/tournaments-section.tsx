'use client';

import { Trophy, Calendar, Medal, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function TournamentsSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold">Torneos</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Calendar className="w-10 h-10 text-emerald-600 mb-4" />
          <h3 className="text-lg font-bold mb-2">Temporada Actual</h3>
          <p className="text-muted-foreground">
            Primera División 2024 - Apertura
          </p>
          <Link href="/torneos/1">
            <Button variant="outline" className="w-full">
              Ver Detalles
            </Button>
          </Link>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Medal className="w-10 h-10 text-emerald-600 mb-4" />
          <h3 className="text-lg font-bold mb-2">Copa Chile</h3>
          <p className="text-muted-foreground mb-4">Torneo Nacional de Copa</p>
          <Button variant="outline" className="w-full">
            Próximamente
          </Button>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Crown className="w-10 h-10 text-emerald-600 mb-4" />
          <h3 className="text-lg font-bold mb-2">Supercopa</h3>
          <p className="text-muted-foreground mb-4">Campeón vs Campeón</p>
          <Button variant="outline" className="w-full">
            Próximamente
          </Button>
        </Card>
      </div>
    </section>
  );
}
