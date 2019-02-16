import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    constructor() {
        super();
        this.state = {
            done : false,
            important: false
        }
        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                }
            });
        }
        this.onBtnImportantClick = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                }
            });
        } 
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
        

        let itemLabelClasses = 'todo-item-text';
        if(done) {
            itemLabelClasses += ' todo-item-text--done';
        }
        if(important) {
            itemLabelClasses += ' todo-item-text--important';
        }

        return (
            <div className="todo-list-item-inner">
                <div className={itemLabelClasses} onClick={ this.onLabelClick } >{label}</div>
                <div className="button-group">
                    <button className="btn btn--remove" onClick={onDeleted}>
                        <i className="material-icons small">delete</i>
                    </button>
                    <button className="btn btn--highlight" onClick={ this.onBtnImportantClick }>
                        <i className="material-icons small">priority_high</i>
                    </button>
                </div>
            </div>
        ); 
    };
}
