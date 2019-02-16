import React from 'react';
import './add-item-panel.css'

const AddItemPanel = ({onAddItem}) => {
    return (
        <div className="add-item-panel">
            <button className="add-item-btn" onClick={onAddItem}>Add new item</button>
        </div>
    );
}

export default AddItemPanel;