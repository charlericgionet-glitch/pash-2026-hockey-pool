import { DraftState, Participant } from '../types';

const STORAGE_KEY = 'pash_2026_draft_state';

export const StorageService = {
  saveDraftState: (state: DraftState) => {
    try {
      const serializable = {
        ...state,
        pickedPlayers: Array.from(state.pickedPlayers),
        startTime: state.startTime?.toISOString(),
        rounds: state.rounds.map(r => ({
          ...r,
          startTime: r.startTime?.toISOString()
        })),
        participants: state.participants.map(p => ({
          ...p,
          picks: p.picks.map(pk => ({
            ...pk,
            pickedAt: pk.pickedAt.toISOString()
          }))
        }))
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  },

  loadDraftState: (): DraftState | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;
      
      const parsed = JSON.parse(data);
      return {
        ...parsed,
        pickedPlayers: new Set(parsed.pickedPlayers),
        startTime: parsed.startTime ? new Date(parsed.startTime) : undefined,
        rounds: parsed.rounds.map((r: any) => ({
          ...r,
          startTime: r.startTime ? new Date(r.startTime) : undefined
        })),
        participants: parsed.participants.map((p: any) => ({
          ...p,
          picks: p.picks.map((pk: any) => ({
            ...pk,
            pickedAt: new Date(pk.pickedAt)
          }))
        }))
      };
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      return null;
    }
  },

  clearDraftState: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
