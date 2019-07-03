import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import ItemCount from '../item-count';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../to-do-list';
import AddItemPanel from '../add-item-panel';

import './app.css';

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Go to bad'),
        ],
        term: '',
        filter: 'all'
    };

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
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        });
    };

    onTypeToSearch = (term) => {
        this.setState({ term })
    };

    search = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    toggleProperty(arr, id, propName) {
        const elemId = arr.findIndex((el) => el.id === id);
        const oldItem = arr[elemId];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        const newTodoData = [
            ...arr.slice(0, elemId),
            newItem,
            ...arr.slice(elemId + 1)
        ];

        return {
            todoData: newTodoData
        }
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onFilterClick = (filter) => {
        this.setState({ filter })
    };

    filter = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;

            case 'active':
                return items.filter((el) => !el.done );

            case 'done':
                return  items.filter((el) => el.done );
            default: return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app">
                <div className="app-wrapper">
                    <div className="app-header">
                        <AppHeader />
                    </div> 
                    <div className="app-content">
                        <ItemCount toDo={todoCount} done={doneCount} />
                        <div className="app-filter-box">
                            <SearchPanel onSearchItem={this.onTypeToSearch}/>
                            <ItemStatusFilter
                                filter={filter}
                                onFilterClick={this.onFilterClick}/>
                        </div>
                        <div className="todo-list-wrapper">
                            <TodoList 
                            todos={visibleItems}
                            onDeleted={this.deleteItem}
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                            />
                        </div>
                        <AddItemPanel onAddItem={this.addItem}/>
                    </div>
                </div>
            </div>
        );
    }
};