import React from 'react';
import PropTypes from 'prop-types';

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div className="justify-begin flex flex-wrap items-center">
      {items.map((item, index) => (
        <button className="m-1 rounded-sm bg-primaryLight p-1 hover:bg-secondary hover:text-primary" value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
};
