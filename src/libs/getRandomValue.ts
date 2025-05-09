// Async function to get a random value
export async function getRandomValue(): Promise<number> {
  return Math.floor(Math.random() * 100); // Returns a random number between 0 and 99
}
