import { useState, useCallback } from 'react';
import { Difficulty, GameState, Question, GameStore } from '../types/game';
import { generateQuestion } from '../utils/colorUtils';

const TOTAL_QUESTIONS = 10;

interface UseGameReturn extends GameStore {
  startGame: (d: Difficulty) => void;
  submitAnswer: (a: string) => void;
  reset: () => void;
}

export function useGame(): UseGameReturn {
  const [state, setState] = useState<GameState>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; expected: string; given: string } | null>(null);

  const startGame = useCallback((d: Difficulty) => {
    const newQuestions: Question[] = [];
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      newQuestions.push(generateQuestion(d, i));
    }
    setQuestions(newQuestions);
    setDifficulty(d);
    setCurrentQuestion(0);
    setScore(0);
    setLastAnswer(null);
    setState('playing');
  }, []);

  const submitAnswer = useCallback((answer: string) => {
    const q = questions[currentQuestion];
    if (!q) return;

    const correct = answer === q.digit;
    setScore(prev => correct ? prev + 1 : prev);
    setLastAnswer({ correct, expected: q.digit, given: answer });
    setState('answered');
  }, [questions, currentQuestion]);

  const reset = useCallback(() => {
    setState('idle');
    setCurrentQuestion(0);
    setScore(0);
    setQuestions([]);
    setLastAnswer(null);
  }, []);

  return {
    state,
    currentQuestion,
    score,
    difficulty,
    questions,
    lastAnswer,
    startGame,
    submitAnswer,
    reset,
  };
}
