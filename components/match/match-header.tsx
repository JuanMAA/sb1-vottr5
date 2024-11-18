import { Match, Tournament } from '@/lib/tournament-data';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface MatchHeaderProps {
  tournament: Tournament;
  match: Match;
}

export function MatchHeader({ tournament, match }: MatchHeaderProps) {
  return (
    <div className="relative">
      {/* Stadium Background */}
      <div className="relative h-[50vh]">
        <Image
          src={
            match.stadiumImage ||
            'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
          }
          alt={match.stadium}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Match Info Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container">
          <div className="text-center text-white">
            <Badge
              variant="secondary"
              className="inline-block px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm mb-6"
            >
              {tournament.name} · {tournament.season}
            </Badge>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{match.homeTeam}</div>
                <div className="text-6xl font-bold">{match.homeScore}</div>
              </div>
              <div className="text-4xl font-bold text-white/60">vs</div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{match.awayTeam}</div>
                <div className="text-6xl font-bold">{match.awayScore}</div>
              </div>
            </div>

            <div className="inline-block px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 text-sm text-white/90">
                <span>{formatDate(match.date)}</span>
                <span>•</span>
                <span>{match.stadium}</span>
                <span>•</span>
                <span>Árbitro: {match.referee}</span>
                {match.attendance && (
                  <>
                    <span>•</span>
                    <span>Asistencia: {match.attendance.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
