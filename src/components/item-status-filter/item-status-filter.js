import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

     buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'Done'}
    ];

    render() {

        const { filter, onFilterClick } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const btnClass = isActive ? 'btn--filter--active' : '';
            return (
                <button data-name={name}
                        className={`btn btn--filter ${btnClass}`}
                        key={name}
                        onClick={() => onFilterClick(name)}
                >{label}</button>
            );
        });

        return (
            <div className="item-status-filter">
                { buttons }
            </div>
        );
    };
}