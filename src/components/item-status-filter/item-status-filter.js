import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="item-status-filter">
                <button className="btn btn--filter btn--all btn--filter--active">All</button>
                <button className="btn btn--filter btn--active">Active</button>
                <button className="btn btn--filter btn--done">Done</button>
            </div>
        );
    };
}