/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { changeActiveFilter, clearCompleted } from '../todos/todosSlice';

const ContentFooter = () => {
    const dispatch = useDispatch()
    const i = useSelector((state) => state.todos.items);
    const itemsLeft = i.filter((item) => !item.completed).length;

    const activeFilter = useSelector((state) => state.todos.activeFilter)

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft}</strong>&nbsp;
                item{itemsLeft > 0 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a className={activeFilter === "all" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("all"))}
                    >All</a>
                </li>
                <li>
                    <a className={activeFilter === "all" ? "active" : ""}
                        onClick={() => dispatch(changeActiveFilter("active"))}
                    >Active</a>
                </li>
                <li>
                    <a className={activeFilter === "all" ? "completed" : ""}
                        onClick={() => dispatch(changeActiveFilter("completed"))}
                    >Completed</a>
                </li>
            </ul>
            <button className="clear-completed"
                onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter