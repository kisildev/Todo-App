import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../to-do-list';

import './app.css';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Build React App', important: true, id: 2},
        {label: 'Go to bad', important: true, id: 3},
    ];

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
                        <TodoList todos={todoData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;