import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    constructor() {
        super();
        this.onLabelClick = () => console.log(`Done ${this.props.label}`)
    }

    render() {
        const {label, important = false} = this.props;
        const style = {
            color: important ? '#f44336' : null, 
            fontWeight: important ? '500' : null 
        };
        return (
            <div className="todo-list-item-inner">
                <div className="todo-item-text" style={style} onClick={ this.onLabelClick } >{label}</div>
                <div className="button-group">
                    <button className="btn btn--remove">
                        <i className="material-icons small">delete</i>
                    </button>
                    <button className="btn btn--highlight">
                        <i className="material-icons small">priority_high</i>
                    </button>
                </div>
            </div>
        ); 
    };
}
