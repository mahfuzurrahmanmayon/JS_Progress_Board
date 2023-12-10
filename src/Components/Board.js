// src/Board.js
import React, { useState } from 'react';


const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'in-progress' },
    { id: 3, text: 'Task 3', status: 'done' },
  ]);

  

  return (
    <div className="board">
      <div className="column">
        <h3>Todo</h3>
        {cards
        .filter((card) => card.status === 'todo')
        .map((card) => (
            <div className="card">
                <p>{card.text}</p>
            </div>
        ))}
        
      </div>
      <div className="column">
        <h3>In Progress</h3>
        {cards
        .filter((card) => card.status === 'in-progress')
        .map((card) => (
            <div className="card">
                <p>{card.text}</p>
            </div>
        ))}
        
      </div>
      <div className="column">
        <h3>Done</h3>
        {cards
        .filter((card) => card.status === 'done')
        .map((card) => (
            <div className="card">
                <p>{card.text}</p>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default Board;
