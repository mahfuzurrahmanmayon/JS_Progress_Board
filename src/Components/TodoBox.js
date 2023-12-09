import React from 'react'
import Todo from './Todo'



function TodoBox({todos}) {
    return (
        <div>
            {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
        </div>
    )
}

export default TodoBox