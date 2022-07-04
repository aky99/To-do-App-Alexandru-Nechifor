import React from 'react';

const ClearBtn = ({ setTodos }) => {
  const clearTodos = () => {
    localStorage.setItem('todos', JSON.stringify([]));
    setTodos([]);
  };

  return (
    <div className="clear-all">
      <button onClick={clearTodos} className="clear-btn">
        Clear all
      </button>
    </div>
  );
};

export default ClearBtn;
