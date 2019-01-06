import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchTxt = 'Type here to serch';
    const searchStyle = {
        fontSize: '20px'
    }
    return  <input className="search-field"
        style={searchStyle}
        placeholder={searchTxt} 
        type="search"/>;
};

export default SearchPanel;