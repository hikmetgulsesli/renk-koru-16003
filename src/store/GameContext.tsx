import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { Difficulty, GameState, Question, GameStore } from '../types/game';
import { generateQuestion } from '../utils/colorUtils';

interface GameContextValue extends GameStore {
  startGame: (difficulty: Difficulty) => void;
  submitAnswer: (answer: string) => void;
  nextQuestion: () => void;
  reset: () => void;
}

const TOTAL_QUESTIONS = 10;

const initialState: GameStore = {
  state: 'idle',
  currentQuestion: 0,
  score: 0,
  difficulty: 'medium',
  questions: [],
  lastAnswer: null,
};

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<GameStore>(initialState);

  const startGame = useCallback((difficulty: Difficulty) => {
    const questions: Question[] = [];
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      questions.push(generateQuestion(difficulty, i));
    }
    
    setStore({
      state: 'playing',
      currentQuestion: 0,
      score: 0,
      difficulty,
      questions,
      lastAnswer: null,
    });
  }, []);

  const submitAnswer = useCallback((answer: string) => {
    setStore(prev => {
      const currentQ = prev.questions[prev.currentQuestion];
      if (!currentQ) return prev;

      const correct = answer === currentQ.digit;
      
      return {
        ...prev,
        state: 'answered',
        score: correct ? prev.score + 1 : prev.score,
        lastAnswer: {
          correct,
          expected: currentQ.digit,
          given: answer,
        },
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setStore(prev => {
      const nextIndex = prev.currentQuestion + 1;
      
      if (nextIndex >= TOTAL_QUESTIONS) {
        return {
          ...prev,
          state: 'finished',
        };
      }
      
      return {
        ...prev,
        state: 'playing',
        currentQuestion: nextIndex,
        lastAnswer: null,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setStore(initialState);
  }, []);

  const value: GameContextValue = {
    ...store,
    startGame,
    submitAnswer,
    nextQuestion,
    reset,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext(): GameContextValue {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}
