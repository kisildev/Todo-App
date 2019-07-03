import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         term: ''
    //     }
    // }

    state = {
        term: ''
    };

    onTypeToSearch = (e) => {
        const newTerm = e.target.value;
        this.setState( { term: newTerm });
        this.props.onSearchItem(newTerm);
    };

    render() {
        const searchTxt = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        }
        return  <input
            className="search-field"
            style={searchStyle}
            placeholder={searchTxt}
            onChange={this.onTypeToSearch}
            value={this.state.term}
            type="search"/>
    };
};
