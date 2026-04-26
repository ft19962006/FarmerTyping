// Simple word pools by length
const WORD_POOLS: Record<number, string[]> = {
  3: ['cat', 'dog', 'sun', 'red', 'big', 'run', 'hat', 'cup', 'bed', 'pen'],
  4: ['tree', 'farm', 'corn', 'seed', 'grow', 'rain', 'soil', 'leaf', 'root', 'stem'],
  5: ['plant', 'water', 'earth', 'green', 'fruit', 'bloom', 'field', 'grain', 'wheat', 'berry'],
  6: ['garden', 'flower', 'tomato', 'carrot', 'pepper', 'squash', 'sprout', 'branch', 'forest', 'meadow'],
  7: ['harvest', 'pumpkin', 'farming', 'growing', 'seedling', 'cabbage', 'sunlight', 'organic', 'fertile', 'compost'],
  8: ['gardener', 'cucumber', 'eggplant', 'broccoli', 'mushroom', 'radishes', 'beetroot', 'zucchini', 'parsley', 'spinach'],
};

/**
 * Generate a random word within the specified length range
 * @param minLength Minimum word length (inclusive)
 * @param maxLength Maximum word length (inclusive)
 * @returns A random word from the appropriate pool
 */
export function generateWord(minLength: number, maxLength: number): string {
  const validLengths = Object.keys(WORD_POOLS)
    .map(Number)
    .filter(len => len >= minLength && len <= maxLength);
  
  if (validLengths.length === 0) {
    // Fallback to closest available length
    const allLengths = Object.keys(WORD_POOLS).map(Number);
    const closestLength = allLengths.reduce((prev, curr) => {
      const prevDiff = Math.min(Math.abs(prev - minLength), Math.abs(prev - maxLength));
      const currDiff = Math.min(Math.abs(curr - minLength), Math.abs(curr - maxLength));
      return currDiff < prevDiff ? curr : prev;
    });
    const pool = WORD_POOLS[closestLength];
    return pool[Math.floor(Math.random() * pool.length)];
  }
  
  const randomLength = validLengths[Math.floor(Math.random() * validLengths.length)];
  const pool = WORD_POOLS[randomLength];
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Generate a word suitable for harvesting a specific crop type
 * @param cropType The crop type object with minWordLength and maxWordLength
 * @returns A random word within the crop's difficulty range
 */
export function generateWordForCrop(cropType: { minWordLength: number; maxWordLength: number }): string {
  return generateWord(cropType.minWordLength, cropType.maxWordLength);
}

/**
 * Check if a typed string matches the target word
 * @param target The target word to match
 * @param typed The user's typed input
 * @returns Object with match status and character-by-character correctness
 */
export function checkWordMatch(target: string, typed: string): {
  isComplete: boolean;
  isCorrect: boolean;
  correctChars: boolean[];
} {
  const correctChars = typed.split('').map((char, i) => char === target[i]);
  const isComplete = typed.length === target.length;
  const isCorrect = isComplete && correctChars.every(c => c);
  
  return { isComplete, isCorrect, correctChars };
}

/**
 * Calculate typing statistics
 * @param startTime Timestamp when typing started
 * @param endTime Timestamp when typing ended
 * @param wordLength Length of the completed word
 * @param errorCount Number of typing errors made
 * @returns WPM and accuracy statistics
 */
export function calculateTypingStats(
  startTime: number,
  endTime: number,
  wordLength: number,
  errorCount: number
): { wpm: number; accuracy: number } {
  const timeInMinutes = (endTime - startTime) / 60000;
  // Standard: 5 characters = 1 word
  const words = wordLength / 5;
  const wpm = timeInMinutes > 0 ? Math.round(words / timeInMinutes) : 0;
  
  const totalKeystrokes = wordLength + errorCount;
  const accuracy = totalKeystrokes > 0 
    ? Math.round((wordLength / totalKeystrokes) * 100) 
    : 100;
  
  return { wpm, accuracy };
}
