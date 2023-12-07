import React from 'react'

function Todo({todo}) {


    return (
        <>
            <div>
                <h2>{todo.id}</h2>
                <p>{todo.title}</p>
            </div>
        </>
    )
}

export default Todo