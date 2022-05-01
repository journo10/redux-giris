import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggle, deleteTodo } from '../todos/todosSlice';


const TodoList = () => {
    const i = useSelector((state) => state.todos.items);
    //console.log(i);
    const dispatch = useDispatch()

    //delete todo
    const handleDeleteTodo = (id) => {
        if (window.confirm("Silmek istediğinizden emin misiniz?")) {
            dispatch(deleteTodo(id))
        }
    }

    return (
        <ul className="todo-list">
            {i.map((item) => (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                    <div className="view">
                        <input
                            checked={item.completed}
                            onChange={() => dispatch(toggle({ id: item.id }))}
                            className="toggle"
                            type="checkbox" />
                        <label>{item.title}</label>
                        <button onClick={() => handleDeleteTodo(item.id)} className="destroy"></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList