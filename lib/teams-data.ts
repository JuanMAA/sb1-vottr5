export interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  nationality: string;
  image: string;
}

export interface Trophy {
  id: number;
  name: string;
  year: string;
  competition: string;
}

export interface TeamStats {
  goalsScored: number;
  goalsConceded: number;
  cleanSheets: number;
  possession: number;
  passAccuracy: number;
  shotsPerGame: number;
}

export interface Tournament {
  id: number;
  name: string;
  season: string;
  year: string;
  position: string;
  points: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
}

export interface Team {
  id: number;
  name: string;
  image: string;
  stadium: string;
  stadiumImage: string;
  founded: string;
  region: string;
  description: string;
  manager: string;
  titles: number;
  squad: Player[];
  stats: TeamStats;
  currentForm: ('W' | 'D' | 'L')[];
  tournaments: Tournament[];
  trophies: Trophy[];
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Colo-Colo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    stadium: "Estadio Monumental",
    stadiumImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    founded: "1925",
    region: "Metropolitana",
    description: "Colo-Colo es el club más laureado del fútbol chileno. Fundado el 19 de abril de 1925, el 'Cacique' ha construido una rica historia de éxitos tanto a nivel nacional como internacional, incluyendo la Copa Libertadores de 1991.",
    manager: "Jorge Almirón",
    titles: 33,
    squad: [
      {
        id: 1,
        name: "Brayan Cortés",
        number: "1",
        position: "Portero",
        nationality: "Chileno",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        id: 2,
        name: "Maximiliano Falcón",
        number: "3",
        position: "Defensa",
        nationality: "Uruguayo",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        id: 3,
        name: "Arturo Vidal",
        number: "23",
        position: "Mediocampista",
        nationality: "Chileno",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    stats: {
      goalsScored: 45,
      goalsConceded: 25,
      cleanSheets: 12,
      possession: 55,
      passAccuracy: 82,
      shotsPerGame: 14.5
    },
    currentForm: ['W', 'W', 'D', 'L', 'W'],
    tournaments: [
      {
        id: 1,
        name: "Primera División 2024",
        season: "Apertura",
        year: "2024",
        position: "2°",
        points: 28,
        matches: 12,
        wins: 8,
        draws: 4,
        losses: 0
      },
      {
        id: 2,
        name: "Primera División 2023",
        season: "Clausura",
        year: "2023",
        position: "3°",
        points: 52,
        matches: 30,
        wins: 15,
        draws: 7,
        losses: 8
      }
    ],
    trophies: [
      {
        id: 1,
        name: "Primera División",
        year: "2022",
        competition: "Torneos Nacionales"
      },
      {
        id: 2,
        name: "Copa Chile",
        year: "2021",
        competition: "Copas Nacionales"
      },
      {
        id: 3,
        name: "Copa Libertadores",
        year: "1991",
        competition: "Torneos Internacionales"
      }
    ]
  },
  {
    id: 2,
    name: "Universidad de Chile",
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    stadium: "Estadio Nacional",
    stadiumImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    founded: "1927",
    region: "Metropolitana",
    description: "La Universidad de Chile es uno de los clubes más populares y exitosos del fútbol chileno. Conocido como 'La U', el club ha ganado múltiples títulos nacionales y la Copa Sudamericana 2011.",
    manager: "Gustavo Álvarez",
    titles: 18,
    squad: [
      {
        id: 1,
        name: "Cristóbal Campos",
        number: "1",
        position: "Portero",
        nationality: "Chileno",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ],
    stats: {
      goalsScored: 38,
      goalsConceded: 28,
      cleanSheets: 10,
      possession: 52,
      passAccuracy: 80,
      shotsPerGame: 13.2
    },
    currentForm: ['W', 'L', 'D', 'W', 'W'],
    tournaments: [
      {
        id: 1,
        name: "Primera División 2024",
        season: "Apertura",
        year: "2024",
        position: "4°",
        points: 24,
        matches: 12,
        wins: 7,
        draws: 3,
        losses: 2
      }
    ],
    trophies: [
      {
        id: 1,
        name: "Primera División",
        year: "2017",
        competition: "Torneos Nacionales"
      },
      {
        id: 2,
        name: "Copa Sudamericana",
        year: "2011",
        competition: "Torneos Internacionales"
      }
    ]
  }
];

export function getTeam(id: number): Team | undefined {
  return teams.find(t => t.id === id);
}