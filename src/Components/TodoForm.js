import React, { useState } from 'react'

function TodoForm() {

    const [text,setText] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleTextSubmit = (e) => {
        e.preventDefault()
        console.log("click");
    }

    return (
        <div>
            <form onSubmit={handleTextSubmit} className='todo-form'>
                <input className='todo-input-box' type='text' value={text} onChange={handleTextChange} placeholder='Enter your todo...'></input>
                <button className='todo-add-button'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm