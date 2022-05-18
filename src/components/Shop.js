import React, { useState, useEffect } from 'react';
import { get } from '../mockBackend/fetch';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    get('/categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then(response => {
        setItems(prev => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [selectedCategory, items]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className="mx-auto mt-32 max-w-lg">
      <h1 className="pb-4 text-xl font-bold">{`Clothes 'n Things`}</h1>
      <nav className="flex justify-left pb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="border bg-slate-800 p-4 hover:bg-secondaryLight hover:text-primary">
            {category}
          </button>
        ))}
      </nav>
      <h2 className="underline">{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
