import React from 'react';
import PropTypes from 'prop-types';

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-1">
      <input
        className="m-1 rounded-sm border border-secondary bg-slate-800 p-1 outline-none"
        name="title"
        placeholder="New task"
        value={newTask.title || ''}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            className="m-1 rounded-sm border border-secondary bg-slate-800 p-1 outline-none"
            name="description"
            placeholder="Details..."
            value={newTask.description || ''}
            onChange={handleChange}
          />
          <button type="submit" className="m-1 bg-secondary p-1 text-black">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

NewTask.propTypes = {
  newTask: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
