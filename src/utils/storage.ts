import type { Dog } from '../types/dog';

const DOG_KEY = 'pawcoach.dog';

export function loadDog(): Dog | null {
  try {
    const raw = localStorage.getItem(DOG_KEY);
    return raw ? (JSON.parse(raw) as Dog) : null;
  } catch {
    return null;
  }
}

export function saveDog(dog: Dog): void {
  localStorage.setItem(DOG_KEY, JSON.stringify(dog));
}
