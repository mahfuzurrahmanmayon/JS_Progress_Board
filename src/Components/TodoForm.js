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
            <form onSubmit={handleTextSubmit}>
                <input type='text' value={text} onChange={handleTextChange} ></input>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm