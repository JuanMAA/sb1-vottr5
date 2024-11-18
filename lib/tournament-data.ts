export interface Match {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  stadium: string;
  stadiumImage?: string;
  referee: string;
  attendance?: number;
  summary: string;
  highlightsUrl?: string;
  goals: Array<{
    id: number;
    minute: number;
    player: string;
    team: 'home' | 'away';
    type: 'normal' | 'penalty' | 'own-goal';
  }>;
  cards: Array<{
    id: number;
    minute: number;
    player: string;
    team: 'home' | 'away';
    type: 'yellow' | 'red';
  }>;
}

export interface Tournament {
  id: number;
  year: string;
  name: string;
  season: string;
  champion: string;
  startDate: string;
  endDate: string;
  matches: Match[];
}

export const tournaments: Tournament[] = [
  {
    id: 1,
    year: "2024",
    name: "Primera División 2024",
    season: "Apertura",
    champion: "Por definir",
    startDate: "Febrero 2024",
    endDate: "Julio 2024",
    matches: [
      {
        id: 1,
        date: "2024-02-15",
        homeTeam: "Colo-Colo",
        awayTeam: "Universidad de Chile",
        homeScore: 2,
        awayScore: 1,
        stadium: "Estadio Monumental",
        stadiumImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        referee: "Roberto Tobar",
        attendance: 45000,
        summary: "Un intenso Superclásico que se definió en los últimos minutos con un gol de tiro libre.",
        highlightsUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        goals: [
          { id: 1, minute: 23, player: "Gil", team: 'home', type: 'normal' },
          { id: 2, minute: 67, player: "Assadi", team: 'away', type: 'normal' },
          { id: 3, minute: 89, player: "Palacios", team: 'home', type: 'normal' }
        ],
        cards: [
          { id: 1, minute: 34, player: "Zaldivia", team: 'away', type: 'yellow' },
          { id: 2, minute: 78, player: "Pavez", team: 'home', type: 'yellow' },
          { id: 3, minute: 82, player: "Casanova", team: 'away', type: 'red' }
        ]
      }
    ]
  }
];