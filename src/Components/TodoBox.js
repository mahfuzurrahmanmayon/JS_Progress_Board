import React from 'react'
import Todo from './Todo'



function TodoBox({todos}) {
    console.log(todos)
    return (
        <div>
            {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
        </div>
    )
}

export default TodoBox