export type Difficulty = 'easy' | 'medium' | 'hard';

export type GameState = 'idle' | 'selecting' | 'playing' | 'answered' | 'finished';

export interface Question {
  id: string;
  digit: string;
  backgroundColor: string;
  foregroundColor: string;
  dots: Array<{ x: number; y: number; r: number; color: string }>;
  difficulty?: Difficulty;
}

export interface GameStore {
  state: GameState;
  currentQuestion: number;
  score: number;
  difficulty: Difficulty;
  questions: Question[];
  lastAnswer: { correct: boolean; expected: string; given: string } | null;
}