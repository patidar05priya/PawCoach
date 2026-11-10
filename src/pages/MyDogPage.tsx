import { useState } from 'react';
import { Link } from 'react-router';
import type { Dog } from '../types/dog';
import { loadDog } from '../utils/storage';

function formatAge(dog: Dog): string {
  const unit = dog.age === 1 ? dog.ageUnit.slice(0, -1) : dog.ageUnit;
  return `${dog.age} ${unit}`;
}

export default function MyDogPage() {
  const [dog] = useState(loadDog);

  if (!dog) {
    return (
      <section className="empty">
        <p className="big-emoji">🐶</p>
        <h1>No dog yet</h1>
        <p>Add your dog to get started with training.</p>
        <Link to="/add-dog" className="button">
          Add your dog
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>My Dog</h1>
      <div className="card">
        <p className="big-emoji">🐕</p>
        <h2>{dog.name}</h2>
        <p>
          {formatAge(dog)} · {dog.breed}
        </p>
        <div className="row">
          <Link to="/training" className="button">
            Start training
          </Link>
          <Link to="/add-dog" className="button secondary">
            Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
