import React from 'react';
import TodoListItem from '../to-do-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const {id, ... itemProps} = item;
        return (
            <li key={id} className="todo-list-item">
                <TodoListItem {... itemProps} />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;