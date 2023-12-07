import React from 'react'
import '../index.css'

function Todo({todo}) {


    return (
        <>
            <div className='todo-box'>
                <h2 className='todo-heading'>{todo.id}</h2>
                <p className='todo-subtitle'>{todo.title}</p>
            </div>
        </>
    )
}

export default Todo