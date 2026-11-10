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

const THEME_KEY = 'pawcoach.theme';

export function loadThemeId(): string | null {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

export function saveThemeId(id: string): void {
  localStorage.setItem(THEME_KEY, id);
}
