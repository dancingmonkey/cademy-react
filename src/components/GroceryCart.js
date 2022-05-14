import React, { useState } from 'react';
import ItemList from '../data/itemList';
import { produce, pantryItems } from '../data/storeItems';

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart(prev => {
      return [item, ...prev];
    });
  };

  const removeItem = targetIndex => {
    setCart(prev => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div className="max-w-sm bg-primaryDark">
      <h1 className="text-lg">Grocery Cart</h1>
      <ul className="flex flex-wrap">
        {cart.map((item, index) => (
          <li className="m-1 cursor-pointer rounded-sm bg-secondary p-1 text-primary" onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
