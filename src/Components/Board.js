// import all the necessary things
import React, { useEffect, useState } from 'react';
import Form from './Form';
import { FaBackspace  } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import MarkdownPreview from './MarkDownPreview';



const Board = () => {
  // Card Data and save LocalStorage
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || [
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'in-progress' },
    { id: 3, text: 'Task 3', status: 'done' },
  ]);

  // initial useState hooks
  const [selectedTask, setSelectedTask] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);


  // handleTextAreaFocus 
  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  // handleTextAreaBlur
  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };


  // handleTextSubmit function
  const handleTextSubmit = (inputText, addrtype) => {
    if (inputText === '') {
      return; 
    }

    const newCard = { id: cards.length + 1, text: inputText, status: addrtype };
    setCards([...cards, newCard]);

  };
  
  // handleTaskClick function
  const handleTaskClick = () => {
    setSelectedTask(true);
  };

  // handleTaskCloseClick function
  const handleCloseClick = (e) => {
    e.stopPropagation()
    setSelectedTask(false)
  }
  
  // handleDeleteCard from Array and LocalStorage
  const handleDeleteCard = (itemId) => {
    setCards((prevItems) => prevItems.filter(item => item.id !== itemId))
  }


  // add localstorage cards data in under the Application Localstorage tab
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  // add localstorage posts get data
  useEffect(() => {
    const savedPostContent = localStorage.getItem('posts');
    setPostContent(JSON.parse(savedPostContent));
  }, []);

  // add localstorage posts data in under the Application Localstorage tab
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postContent));
  }, [postContent]);

  return (
    <>
      {/* Form Component */}
      <Form onTextSubmit={handleTextSubmit} />

      {/* Card Component */}
      <div className="card-board">
        <div className="card-column">
            <h3 className='column-heading'>Todo</h3>
            {cards
            .filter((card) => card.status === 'todo')
            .map((card) => (
                <div key={card.id} className="card">

                  <div className='card-flex'>
                        <h4 onClick={handleTaskClick} className='card-text'>{card.id}. {card.text}
                          <div>
                            {
                              selectedTask?
                              <div className="main">
                                  <div className="popup">
                                      <div className="popup-header">
                                          <h1>{card.text}</h1>
                                          <h1 onClick={handleCloseClick}>X</h1>
                                      </div>
                                      <form className='label-container'>
                                          <textarea className='label-textarea'  
                                          value={postContent} 
                                          onChange={e => setPostContent(e.target.value)}
                                          onBlur={handleTextareaBlur}
                                          onFocus={handleTextareaFocus}
                                          >
                                            <MarkdownPreview markdown={postContent} />
                                          </textarea>
                                          
                                      </form>
                                  </div>
                                  
                              </div> : ""
                            }
                          </div>
                        </h4>
                        <div className='card-button'>
                          <button className='todo-edit'>
                            <CiEdit />
                          </button>
                          <button className='todo-delete' onClick={() => handleDeleteCard(card.id)}>
                            <FaBackspace />
                          </button>  
                        </div>
                  </div>


                </div>
            ))}
          
        </div>
        <div className="card-column">
          <h3 className='column-heading'>In Progress</h3>
          {cards
          .filter((card) => card.status === 'in-progress')
          .map((card) => (
            <div key={card.id} className="card">
              
              <h4 className='card-text'>{card.id}. {card.text}</h4>
              
            </div>
          ))}
          
        </div>
        <div className="card-column">
          <h3 className='column-heading'>Done</h3>
          {cards
          .filter((card) => card.status === 'done')
          .map((card) => (
            <div key={card.id} className="card">
                <h4 className='card-text'>{card.id}. {card.text}</h4>

                
            </div>
          ))}
          
        </div>


      </div>
      
    </>

  );
};

export default Board;
