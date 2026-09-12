import { Participant, Round, DraftState, Player } from '../types';

export const DraftLogic = {
  generateRandomOrder: (participants: Participant[]): Participant[] => {
    const shuffled = [...participants];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  createRound: (roundNumber: number, participants: Participant[]): Round => {
    const order = DraftLogic.generateRandomOrder(participants);
    return {
      number: roundNumber,
      order,
      status: 'pending',
      currentPicker: order[0]?.id
    };
  },

  getNextPicker: (round: Round, currentIndex: number): Participant | null => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < round.order.length) {
      return round.order[nextIndex];
    }
    return null;
  },

  getPreviousPicker: (round: Round, currentIndex: number): Participant | null => {
    if (currentIndex > 0) {
      return round.order[currentIndex - 1];
    }
    return null;
  },

  calculateRoundProgress: (state: DraftState): { current: number; total: number } => {
    const currentRound = state.rounds[state.currentRound];
    if (!currentRound) {
      return { current: 0, total: state.participants.length };
    }
    return {
      current: state.currentPickIndex + 1,
      total: currentRound.order.length
    };
  },

  getDraftProgress: (state: DraftState): number => {
    const totalPicks = state.participants.length * 20; // 20 rounds
    const completedPicks = state.participants.reduce((sum, p) => sum + p.picks.length, 0);
    return Math.round((completedPicks / totalPicks) * 100);
  },

  isPlayerPickable: (player: Player, state: DraftState, participant: Participant): boolean => {
    // Vérifier si le joueur est déjà pris
    if (state.pickedPlayers.has(player.id)) {
      return false;
    }

    // Vérifier si ajouter ce joueur dépasse le plafond salarial
    if (participant.totalSalary + player.salary > 104000000) {
      return false;
    }

    return true;
  }
};
