import React, { useState } from 'react'

function Form() {
    const [inputText, setInputText] = useState("")
    const [addrtype, setAddrType] = useState('Home')

    const handleTextChange = (e) => {
        setInputText(e.target.value)
    }

    const handleAddrTypeChange = (e) => {
        setAddrType(e.target.value);
    }

    const handleTextSubmit = (e) => {
        e.preventDefault()
        console.log(inputText, addrtype)
    }

    return (
        <div>
            <form onSubmit={handleTextSubmit} className='todo-form'>
                <input className='todo-input-box' type='text' placeholder='Add Todo' value={inputText} onChange={handleTextChange}></input>
                <select defaultValue={addrtype} onChange={handleAddrTypeChange} id="status">
                    <option value="todo" selected>Todo</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button className='todo-add-button'>Add Todo</button>
            </form>
        </div>
    )
}

export default Form