import React from "react";
import TodoForm from "./Components/TodoForm";
import TodoBox from "./Components/TodoBox";

function App() {

  const todos = [
    {
      id: 1,
      title: 'Complete homework',
      completed: false
    },
    {
      id: 2,
      title: 'Read a book',
      completed: true
    },
    {
      id: 3,
      title: 'Go for a run',
      completed: false
    },
    {
      id: 4,
      title: 'Buy groceries',
      completed: false
    }
  ];

  return (
    <div className="todo-container">
      <TodoForm />
      <TodoBox todos={todos} />
    </div>
  );
}

export default App;
