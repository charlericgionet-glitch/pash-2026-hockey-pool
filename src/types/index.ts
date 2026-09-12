export interface Player {
  id: string;
  name: string;
  team: string;
  position: 'C' | 'LW' | 'RW' | 'D' | 'G';
  nhl_team: string;
  salary: number;
  conference: 'EST' | 'OUEST';
}

export interface Participant {
  id: string;
  name: string;
  order: number;
  picks: PlayerPick[];
  totalSalary: number;
}

export interface PlayerPick {
  roundNumber: number;
  pickedAt: Date;
  player: Player;
}

export interface Round {
  number: number;
  order: Participant[];
  currentPicker?: string;
  status: 'pending' | 'active' | 'completed';
  startTime?: Date;
}

export interface DraftState {
  participants: Participant[];
  rounds: Round[];
  currentRound: number;
  currentPickIndex: number;
  players: Player[];
  pickedPlayers: Set<string>;
  startTime?: Date;
  status: 'not_started' | 'in_progress' | 'completed';
}

export interface ValidationRule {
  forwards: number; // 12
  defensemen: number; // 4
  goalies: number; // 2
  teamEast: number; // 1
  teamWest: number; // 1
  salaryCap: number; // 104M
}
