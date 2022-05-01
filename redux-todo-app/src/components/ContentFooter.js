/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ContentFooter = () => {
  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>2</strong>&nbsp;
        items left
    </span>

    <ul className="filters">
        <li>
            <a className="selected">All</a>
        </li>
        <li>
            <a>Active</a>
        </li>
        <li>
            <a>Completed</a>
        </li>
    </ul>
    <button className="clear-completed">
        Clear completed
    </button>
</footer>
  )
}

export default ContentFooter