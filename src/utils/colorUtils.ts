import type { Difficulty, Question } from '../types/game';

// Palettes for different difficulty levels
// Easy: high contrast red-green
const EASY_BACKGROUND_COLORS = [
  '#c4e8c4', // light green
  '#e8d4c4', // light tan
  '#d4e8d4', // mint
  '#e8e4c4', // light cream
  '#d4d4e8', // lavender
];

const EASY_FOREGROUND_COLORS = [
  '#cc3333', // red
  '#33cc33', // green
  '#3333cc', // blue
  '#cccc33', // yellow
  '#cc6600', // orange
];

// Medium: medium contrast
const MEDIUM_BACKGROUND_COLORS = [
  '#b8d4b8', // sage green
  '#d4c4b4', // warm beige
  '#c4c4d4', // gray lavender
  '#bcd4c4', // seafoam
  '#d4d4bc', // olive cream
];

const MEDIUM_FOREGROUND_COLORS = [
  '#996633', // brown
  '#669933', // olive green
  '#336699', // steel blue
  '#996666', // mauve
  '#666699', // slate purple
];

// Hard: protanopia/tritanopia-simulating colors (confusing for colorblind)
const HARD_BACKGROUND_COLORS = [
  '#7a9e7a', // desaturated green
  '#9e8a7a', // grayish brown
  '#8a7a9e', // gray purple
  '#7a8a9e', // slate
  '#9e9a7a', // khaki gray
];

const HARD_FOREGROUND_COLORS = [
  '#b86b4c', // reddish brown (confusable with green for protanopia)
  '#5c8a4c', // olive (confusable for tritanopia)
  '#4c6eb8', // blue-gray (confusable)
  '#8a5c4c', // brownish (confusable)
  '#5c4c6e', // purple gray (confusable)
];

// Digit definitions for Ishihara plates
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Seeded random number generator for reproducible questions
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// Generate dots in Ishihara plate style
export function generateDots(
  bg: string,
  fg: string,
  count: number,
  _digit: string,
  seed: number
): Array<{ x: number; y: number; r: number; color: string }> {
  const random = seededRandom(seed);
  const dots: Array<{ x: number; y: number; r: number; color: string }> = [];
  
  // Plate dimensions (normalized 0-100)
  const centerX = 50;
  const centerY = 50;
  const maxRadius = 48;
  
  // Create digit shape mask (simplified circle clusters)
  const digitDotCount = Math.floor(count * 0.4); // 40% of dots form the digit
  const bgDotCount = count - digitDotCount;
  
  // Generate digit area dots (form the number shape)
  for (let i = 0; i < digitDotCount; i++) {
    const angle = random() * Math.PI * 2;
    const radiusFactor = 0.2 + random() * 0.45; // Inner to mid radius
    const r = 3 + random() * 8; // Dot radius 3-11
    
    // Add some jitter to make it look more natural
    const x = centerX + Math.cos(angle) * radiusFactor * maxRadius * 1.2 + (random() - 0.5) * 10;
    const y = centerY + Math.sin(angle) * radiusFactor * maxRadius * 1.2 + (random() - 0.5) * 10;
    
    // Check if within circle
    const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    if (distFromCenter < maxRadius - r) {
      dots.push({ x, y, r, color: fg });
    }
  }
  
  // Generate background dots
  for (let i = 0; i < bgDotCount; i++) {
    const angle = random() * Math.PI * 2;
    const radiusFactor = 0.1 + random() * 0.9;
    const r = 2 + random() * 7;
    
    const x = centerX + Math.cos(angle) * radiusFactor * maxRadius;
    const y = centerY + Math.sin(angle) * radiusFactor * maxRadius;
    
    const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    if (distFromCenter < maxRadius - r) {
      dots.push({ x, y, r, color: bg });
    }
  }
  
  return dots;
}

// Generate a question for the given difficulty
export function generateQuestion(difficulty: Difficulty, index: number): Question {
  const seed = Date.now() + index * 1000;
  const random = seededRandom(seed);
  
  let bgColors: string[];
  let fgColors: string[];
  
  switch (difficulty) {
    case 'easy':
      bgColors = EASY_BACKGROUND_COLORS;
      fgColors = EASY_FOREGROUND_COLORS;
      break;
    case 'medium':
      bgColors = MEDIUM_BACKGROUND_COLORS;
      fgColors = MEDIUM_FOREGROUND_COLORS;
      break;
    case 'hard':
      bgColors = HARD_BACKGROUND_COLORS;
      fgColors = HARD_FOREGROUND_COLORS;
      break;
  }
  
  // Select random digit
  const digitIndex = Math.floor(random() * DIGITS.length);
  const digit = DIGITS[digitIndex];
  
  // Select colors
  const bgIndex = Math.floor(random() * bgColors.length);
  const fgIndex = Math.floor(random() * fgColors.length);
  const backgroundColor = bgColors[bgIndex];
  const foregroundColor = fgColors[fgIndex];
  
  // Number of dots varies by difficulty
  const dotCount = difficulty === 'easy' ? 80 : difficulty === 'medium' ? 120 : 160;
  
  const dots = generateDots(backgroundColor, foregroundColor, dotCount, digit, seed);
  
  return {
    id: `q-${index}-${Date.now()}`,
    digit,
    backgroundColor,
    foregroundColor,
    dots,
    difficulty,
  };
}
