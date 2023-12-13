import React, { useState } from 'react'

function Form(props) {
    // Initial useState Hooks for inputText and addrType
    const [inputText, setInputText] = useState("")
    const [addrtype, setAddrType] = useState('todo')

    // handleTextChange func
    const handleTextChange = (e) => {
        setInputText(e.target.value)
    }

    // handleAddrTypeChange func
    const handleAddrTypeChange = (e) => {
        setAddrType(e.target.value);
    }

    // handleTextSubmit func and data pass from From Func to Board with Props Drilling
    const handleTextSubmit = (e) => {
        e.preventDefault()
        props.onTextSubmit(inputText, addrtype)
        setInputText("")
    }

    return (
        <div>
            <form onSubmit={handleTextSubmit} className='todo-form'>
                <input className='todo-input-box' type='text' placeholder='Add Todo' value={inputText} onChange={handleTextChange}></input>
                <select value={addrtype} onChange={handleAddrTypeChange} id='status'>
                    <option value='todo'>Todo</option>
                    <option value='in-progress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
                <button className='todo-add-button'> + Add Todo</button>
            </form>
        </div>
    )
}

export default Form