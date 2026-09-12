import { Participant, Player, ValidationRule } from '../types';

export const VALIDATION_RULES: ValidationRule = {
  forwards: 12,
  defensemen: 4,
  goalies: 2,
  teamEast: 1,
  teamWest: 1,
  salaryCap: 104000000 // 104M$
};

export const ValidationService = {
  countPosition: (participant: Participant, position: string): number => {
    return participant.picks.filter(p => {
      if (position === 'F') {
        return ['C', 'LW', 'RW'].includes(p.player.position);
      }
      return p.player.position === position;
    }).length;
  },

  countConference: (participant: Participant, conference: 'EST' | 'OUEST'): number => {
    return participant.picks.filter(p => p.player.conference === conference).length;
  },

  validateTeamRequirement: (participant: Participant): boolean => {
    const eastCount = ValidationService.countConference(participant, 'EST');
    const westCount = ValidationService.countConference(participant, 'OUEST');
    return eastCount >= VALIDATION_RULES.teamEast && westCount >= VALIDATION_RULES.teamWest;
  },

  validatePositions: (participant: Participant): boolean => {
    const forwards = ValidationService.countPosition(participant, 'F');
    const defensemen = ValidationService.countPosition(participant, 'D');
    const goalies = ValidationService.countPosition(participant, 'G');
    
    return (
      forwards === VALIDATION_RULES.forwards &&
      defensemen === VALIDATION_RULES.defensemen &&
      goalies === VALIDATION_RULES.goalies
    );
  },

  validateSalaryCap: (participant: Participant): boolean => {
    return participant.totalSalary <= VALIDATION_RULES.salaryCap;
  },

  validateTeamRoster: (participant: Participant): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    const forwards = ValidationService.countPosition(participant, 'F');
    if (forwards !== VALIDATION_RULES.forwards) {
      errors.push(`Attaquants: ${forwards}/${VALIDATION_RULES.forwards}`);
    }

    const defensemen = ValidationService.countPosition(participant, 'D');
    if (defensemen !== VALIDATION_RULES.defensemen) {
      errors.push(`Défenseurs: ${defensemen}/${VALIDATION_RULES.defensemen}`);
    }

    const goalies = ValidationService.countPosition(participant, 'G');
    if (goalies !== VALIDATION_RULES.goalies) {
      errors.push(`Gardiens: ${goalies}/${VALIDATION_RULES.goalies}`);
    }

    if (!ValidationService.validateTeamRequirement(participant)) {
      errors.push('Équipe Est/Ouest non respectée');
    }

    if (!ValidationService.validateSalaryCap(participant)) {
      errors.push(`Plafond salarial dépassé: ${participant.totalSalary}$`);
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
};
