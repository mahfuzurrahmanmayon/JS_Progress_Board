import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoBox from "./Components/TodoBox";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos,setTodos] = useState([])

  const handleAddTodo = (setInputText, setTextArea) => {
    setTodos((prevText) => {
      return [...prevText, {id: uuidv4(), setInputText, setTextArea}]
    })
  }



  return (
    <div className="todo-container">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoBox todos={todos}  />
    </div>
  );
}

export default App;
