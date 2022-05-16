import React from 'react';
import PropTypes from 'prop-types';

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul className="m-1 flex flex-col p-1">
      {allTasks.map(({ title, description, id }) => (
        <li key={id} className="rounded-sm">
          <div className="flex items-center justify-between rounded-sm bg-slate-800 p-1">
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)} className="text-secondary">
              X
            </button>
          </div>
          {!description ? null : (
            <p className="bg-slate-600 p-1">{description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  allTasks: PropTypes.array,
  handleDelete: PropTypes.func,
};
