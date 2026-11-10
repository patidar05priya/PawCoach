import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { BREEDS } from '../data/breeds';
import type { AgeUnit } from '../types/dog';
import { loadDog, saveDog } from '../utils/storage';

type Errors = Partial<Record<'name' | 'age' | 'breed', string>>;

export default function AddDogPage() {
  const navigate = useNavigate();
  const [existing] = useState(loadDog);

  const [name, setName] = useState(existing?.name ?? '');
  const [age, setAge] = useState(existing ? String(existing.age) : '');
  const [ageUnit, setAgeUnit] = useState<AgeUnit>(existing?.ageUnit ?? 'years');
  const [breed, setBreed] = useState(existing?.breed ?? '');
  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const result: Errors = {};
    const ageNum = Number(age);
    const maxAge = ageUnit === 'years' ? 25 : 24;

    if (!name.trim()) result.name = 'Please enter a name.';
    if (!age || !Number.isInteger(ageNum) || ageNum < 1 || ageNum > maxAge) {
      result.age = `Enter a whole number from 1 to ${maxAge}.`;
    }
    if (!breed) result.breed = 'Please choose a breed.';
    return result;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    saveDog({ name: name.trim(), age: Number(age), ageUnit, breed });
    navigate('/');
  }

  return (
    <section>
      <h1>{existing ? 'Edit your dog' : 'Add your dog'}</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Tofu"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>

        <div className="field">
          <span>Age</span>
          <div className="row">
            <input
              type="number"
              min={1}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 8"
              aria-label="Age"
            />
            <select
              value={ageUnit}
              onChange={(e) => setAgeUnit(e.target.value as AgeUnit)}
              aria-label="Age unit"
            >
              <option value="months">months</option>
              <option value="years">years</option>
            </select>
          </div>
          {errors.age && <small className="error">{errors.age}</small>}
        </div>

        <label className="field">
          <span>Breed</span>
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="">Choose a breed…</option>
            {BREEDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.breed && <small className="error">{errors.breed}</small>}
        </label>

        <button type="submit" className="button">
          {existing ? 'Save changes' : 'Add dog'}
        </button>
      </form>
    </section>
  );
}
