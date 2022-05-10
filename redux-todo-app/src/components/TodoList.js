import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { toggle, deleteTodo } from '../todos/todosSlice';


const TodoList = () => {
    const dispatch = useDispatch()
    const i = useSelector((state) => state.todos.items);
    const activeFilter = useSelector((state) => state.todos.activeFilter);


    //delete todo
    const handleDeleteTodo = (id) => {
        if (window.confirm("Silmek istediğinizden emin misiniz?")) {
            dispatch(deleteTodo(id))
        }
    }

    //filter
    let filteredA = [];
    filteredA = i;
    if (activeFilter !== "all") {
        filteredA = i.filter((todo) => activeFilter === "active" ?
            todo.completed === false : todo.completed === true
        )
    }

    return (
        <ul className="todo-list">
            {filteredA.map((item) => (
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