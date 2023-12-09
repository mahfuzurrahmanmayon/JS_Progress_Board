import React from 'react'
import '../index.css'

function Todo({todo}) {
    console.log(todo)
    return (
        <>
            <div key={todo.id} className='todo-box'>
                <h1 className='todo-subtitle'>{todo.setInputText}</h1>
                <h4 className='todo-textarea'>{todo.setTextArea}</h4>
            </div>
        </>
    )
}

export default Todo