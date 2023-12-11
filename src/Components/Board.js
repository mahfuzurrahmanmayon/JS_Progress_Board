// src/Board.js
import React, { useState } from 'react';
import Form from './Form';



const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'in-progress' },
    { id: 3, text: 'Task 3', status: 'done' },
  ]);

  const handleTextSubmit = (inputText, addrtype) => {
    if (inputText.trim() === '') {
      return; // When inputText is empty Do nothing.
    }

    // Create a new card with the submitted data
    const newCard = { id: cards.length + 1, text: inputText, status: addrtype };

    // Update the cards state in App component
    setCards([...cards, newCard]);

    console.log(inputText, addrtype)
  };
  
  

  return (
    <>
      <Form onTextSubmit={handleTextSubmit} />
      <div className="board">
        <div className="column">
            <h3>Todo</h3>
            {cards
            .filter((card) => card.status === 'todo')
            .map((card) => (
                <div key={card.id} className="card">
                    <p>{card.text}</p>
                    <p>{card.id}</p>
                </div>
            ))}
          
        </div>
        <div className="column">
          <h3>In Progress</h3>
          {cards
          .filter((card) => card.status === 'in-progress')
          .map((card) => (
              <div key={card.id} className="card">
                  <p>{card.text}</p>
                  <p>{card.id}</p>
              </div>
          ))}
          
        </div>
        <div className="column">
          <h3>Done</h3>
          {cards
          .filter((card) => card.status === 'done')
          .map((card) => (
              <div key={card.id} className="card">
                  <p>{card.text}</p>
                  <p>{card.id}</p>
              </div>
          ))}
          
        </div>
      </div>
    </>

  );
};

export default Board;
