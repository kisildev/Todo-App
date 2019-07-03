import React from 'react';
import './todo-list-item.css';

 const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {


    let itemLabelClasses = 'todo-item-text';
    if(done) {
        itemLabelClasses += ' todo-item-text--done';
    }
    if(important) {
        itemLabelClasses += ' todo-item-text--important';
    }

    return (
        <div className="todo-list-item-inner">
            <div className={itemLabelClasses} onClick={ onToggleDone } >{label}</div>
            <div className="button-group">
                <button className="btn btn--remove" onClick={onDeleted}>
                    <i className="material-icons small">delete</i>
                </button>
                <button className="btn btn--highlight" onClick={ onToggleImportant }>
                    <i className="material-icons small">priority_high</i>
                </button>
            </div>
        </div>
    ); 
}

export default TodoListItem;