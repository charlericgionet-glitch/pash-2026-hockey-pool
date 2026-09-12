import { Player } from '../types';

// Sample NHL players database
export const PLAYERS: Player[] = [
  // Forwards - East Conference
  { id: '1', name: 'Connor McDavid', team: 'EDM', position: 'C', nhl_team: 'Edmonton', salary: 12500000, conference: 'EST' },
  { id: '2', name: 'Auston Matthews', team: 'TOR', position: 'C', nhl_team: 'Toronto', salary: 11640000, conference: 'EST' },
  { id: '3', name: 'Artemi Panarin', team: 'NYR', position: 'LW', nhl_team: 'NY Rangers', salary: 11640000, conference: 'EST' },
  { id: '4', name: 'David Pastrnak', team: 'BOS', position: 'RW', nhl_team: 'Boston', salary: 11250000, conference: 'EST' },
  { id: '5', name: 'Nathan MacKinnon', team: 'COL', position: 'C', nhl_team: 'Colorado', salary: 12600000, conference: 'OUEST' },
  { id: '6', name: 'Cale Makar', team: 'COL', position: 'D', nhl_team: 'Colorado', salary: 9000000, conference: 'OUEST' },
  { id: '7', name: 'Connor McDavid Jr', team: 'EDM', position: 'LW', nhl_team: 'Edmonton', salary: 8000000, conference: 'OUEST' },
  { id: '8', name: 'Juraj Slafkovsky', team: 'MTL', position: 'LW', nhl_team: 'Montreal', salary: 9250000, conference: 'EST' },
  { id: '9', name: 'Mika Zibanejad', team: 'NYR', position: 'C', nhl_team: 'NY Rangers', salary: 8500000, conference: 'EST' },
  { id: '10', name: 'Alex Ovechkin', team: 'WSH', position: 'LW', nhl_team: 'Washington', salary: 9812500, conference: 'EST' },
  { id: '11', name: 'Nikita Kucherov', team: 'TBL', position: 'RW', nhl_team: 'Tampa Bay', salary: 9500000, conference: 'EST' },
  { id: '12', name: 'Sweater Hellebuyck', team: 'WPG', position: 'C', nhl_team: 'Winnipeg', salary: 6500000, conference: 'OUEST' },
  { id: '13', name: 'Elias Lindholm', team: 'CGY', position: 'C', nhl_team: 'Calgary', salary: 4600000, conference: 'OUEST' },
  { id: '14', name: 'Igor Larionov', team: 'VGK', position: 'C', nhl_team: 'Vegas', salary: 5000000, conference: 'OUEST' },
  { id: '15', name: 'Tage Thompson', team: 'BUF', position: 'C', nhl_team: 'Buffalo', salary: 6500000, conference: 'EST' },

  // Defensemen - East Conference
  { id: '16', name: 'Cale Makar', team: 'COL', position: 'D', nhl_team: 'Colorado', salary: 9000000, conference: 'OUEST' },
  { id: '17', name: 'Roman Josi', team: 'NSH', position: 'D', nhl_team: 'Nashville', salary: 9500000, conference: 'OUEST' },
  { id: '18', name: 'Quinn Hughes', team: 'VAN', position: 'D', nhl_team: 'Vancouver', salary: 7850000, conference: 'OUEST' },
  { id: '19', name: 'Erik Karlsson', team: 'SJS', position: 'D', nhl_team: 'San Jose', salary: 11500000, conference: 'OUEST' },
  { id: '20', name: 'Igor Shesterkin', team: 'NYR', position: 'D', nhl_team: 'NY Rangers', salary: 6000000, conference: 'EST' },
  { id: '21', name: 'Jordan Harris', team: 'MTL', position: 'D', nhl_team: 'Montreal', salary: 5250000, conference: 'EST' },
  { id: '22', name: 'T.J. Oshie', team: 'WSH', position: 'D', nhl_team: 'Washington', salary: 5750000, conference: 'EST' },
  { id: '23', name: 'Tomás Hertl', team: 'SJS', position: 'D', nhl_team: 'San Jose', salary: 8000000, conference: 'OUEST' },
  { id: '24', name: 'Mattias Ekholm', team: 'EDM', position: 'D', nhl_team: 'Edmonton', salary: 5000000, conference: 'OUEST' },
  { id: '25', name: 'Devon Shukeeper', team: 'BOS', position: 'D', nhl_team: 'Boston', salary: 5500000, conference: 'EST' },

  // Goalies - East Conference
  { id: '26', name: 'Igor Shesterkin', team: 'NYR', position: 'G', nhl_team: 'NY Rangers', salary: 6000000, conference: 'EST' },
  { id: '27', name: 'Connor Hellebuyck', team: 'WPG', position: 'G', nhl_team: 'Winnipeg', salary: 6500000, conference: 'OUEST' },
  { id: '28', name: 'Stuart Skinner', team: 'EDM', position: 'G', nhl_team: 'Edmonton', salary: 4000000, conference: 'OUEST' },
  { id: '29', name: 'Linus Ullmark', team: 'BOS', position: 'G', nhl_team: 'Boston', salary: 5000000, conference: 'EST' },
  { id: '30', name: 'Darcy Kuemper', team: 'COL', position: 'G', nhl_team: 'Colorado', salary: 5000000, conference: 'OUEST' },
  { id: '31', name: 'Andrei Vasilevskiy', team: 'TBL', position: 'G', nhl_team: 'Tampa Bay', salary: 7500000, conference: 'EST' },
  { id: '32', name: 'Thatcher Demko', team: 'VAN', position: 'G', nhl_team: 'Vancouver', salary: 5000000, conference: 'OUEST' },
  { id: '33', name: 'Sam Montembeault', team: 'MTL', position: 'G', nhl_team: 'Montreal', salary: 3500000, conference: 'EST' }
];

export const getPlayerById = (id: string): Player | undefined => {
  return PLAYERS.find(p => p.id === id);
};

export const searchPlayers = (query: string): Player[] => {
  const lowercaseQuery = query.toLowerCase();
  return PLAYERS.filter(p =>
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.nhl_team.toLowerCase().includes(lowercaseQuery) ||
    p.position.toLowerCase().includes(lowercaseQuery)
  );
};
