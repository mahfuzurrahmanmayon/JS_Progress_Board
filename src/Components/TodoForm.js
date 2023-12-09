import React, { useState } from 'react'

function TodoForm({onAddTodo}) {

    const [inputText,setInputText] = useState("")
    const [textarea,setTextArea] = useState("")

    const handleTextChange = (e) => {
        setInputText(e.target.value)
    }

    const handleTextarea = (e) => {
        setTextArea(e.target.value)
    }

    const handleTextSubmit = (e) => {
        e.preventDefault()
        onAddTodo(inputText, textarea)
        setInputText("")
        setTextArea("")
    }

    return (
        <div>
            <form onSubmit={handleTextSubmit} className='todo-form'>
                <input className='todo-input-box' type='text' value={inputText} onChange={handleTextChange} placeholder='Enter your todo...'></input>
                <textarea className='todo-desc-box' name="textarea" value={textarea} onChange={handleTextarea} rows="4" placeholder="Enter todo description..."></textarea>                
                <button className='todo-add-button'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm