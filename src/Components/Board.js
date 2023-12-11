// src/Board.js
import React, { useState } from 'react';
import Form from './Form';
import { FaBackspace } from "react-icons/fa";



const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'in-progress' },
    { id: 3, text: 'Task 3', status: 'done' },
  ]);

  const [selectedTask, setSelectedTask] = useState(false);


  const handleTextSubmit = (inputText, addrtype) => {
    if (inputText === '') {
      return; // When inputText is empty Do nothing.
    }

    const newCard = { id: cards.length + 1, text: inputText, status: addrtype };
    setCards([...cards, newCard]);

  };
  
  const handleTaskClick = () => {
    setSelectedTask(!selectedTask);
  };

  const handleDeleteCard = (itemId) => {
    setCards((prevItems) => prevItems.filter(item => item.id !== itemId))
  }

  return (
    <>
      <Form onTextSubmit={handleTextSubmit} />
      <div className="card-board">
        <div className="card-column">
            <h3 className='column-heading'>Todo</h3>
            {cards
            .filter((card) => card.status === 'todo')
            .map((card) => (
                <div key={card.id} className="card">
                    <h4 onClick={handleTaskClick} className='card-text'>{card.id}. {card.text}
                      <div>
                        {
                          selectedTask?
                          <div  className="main">
                              <div className="popup">
                                  <div className="popup-header">
                                      <h1>{card.text}</h1>
                                      <h1 onClick={handleTaskClick}>X</h1>
                                  </div>
                                  <div>
                                    <p>This is description of {card.text}</p>
                                  </div>
                              </div>
                          </div> : ""
                        }
                      </div>
                    </h4>
                    <button className='todo-icon' onClick={() => handleDeleteCard(card.id)}>
                      <FaBackspace />
                    </button>  
                </div>
            ))}
          
        </div>
        <div className="card-column">
          <h3 className='column-heading'>In Progress</h3>
          {cards
          .filter((card) => card.status === 'in-progress')
          .map((card) => (
            <div key={card.id} className="card">
              <h4 className='card-text'>{card.id}. {card.text}
                
              </h4>
            </div>
          ))}
          
        </div>
        <div className="card-column">
          <h3 className='column-heading'>Done</h3>
          {cards
          .filter((card) => card.status === 'done')
          .map((card) => (
            <div key={card.id} className="card">
              <h4 className='card-text'>{card.id}. {card.text}
                
              </h4>
            </div>
          ))}
          
        </div>


      </div>
      
    </>

  );
};

export default Board;
