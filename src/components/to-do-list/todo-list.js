import React from 'react';
import TodoListItem from '../to-do-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos, onDeleted }) => {
    const elements = todos.map((item) => {
        const {id, ... itemProps} = item;
        return (
            <li key={id} className="todo-list-item">
                <TodoListItem 
                {... itemProps}
                onDeleted={() => onDeleted(id)}
                 />
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