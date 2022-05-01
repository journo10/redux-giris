import React, { useState } from 'react'
import { addTodo } from '../todos/todosSlice'
import { useDispatch } from "react-redux"

const Form = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id:Date.now(), title, completed: false }))
        setTitle("")//input temizleme
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus />
        </form>
    )
}

export default Form