import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../to-do-list';
import AddItemPanel from '../add-item-panel';

import './app.css';


export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Build React App', important: true, id: 2},
            {label: 'Go to bad', important: true, id: 3},
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const elemToDelete = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, elemToDelete);
            const after = todoData.slice(elemToDelete + 1);

            const newTodoData = [
                ...before,
                ...after
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    addItem = () => {
        this.setState(({ todoData }) => {
            const elemToAdd = 'New item';

            return {
                todoData: todoData
            }
        });
    }

    render() {
        return (
            <div className="app">
                <div className="app-wrapper">
                    <div className="app-header">
                        <AppHeader/>
                    </div> 
                    <div className="app-content">
                        <div className="app-filter-box">
                            <SearchPanel/>
                            <ItemStatusFilter/>
                        </div>
                        <div className="todo-list-wrapper">
                            <TodoList 
                            todos={this.state.todoData}
                            onDeleted={this.deleteItem}
                            />
                        </div>
                        <AddItemPanel onAddItem={this.addItem}/>
                    </div>
                </div>
            </div>
        );
    }

};