export type AgeUnit = 'months' | 'years';

export interface Dog {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  breed: string;
}
