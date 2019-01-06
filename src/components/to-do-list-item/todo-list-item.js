import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important}) => {
    const style = {
        color: important ? '#f44336' : null, 
        fontWeight: important ? '500' : null 
    };
    return <span style={style}>{label}</span>;
}

export default TodoListItem;