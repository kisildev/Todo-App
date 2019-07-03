import React from 'react';
import './item-count.css';

const ItemCount = ({toDo, done}) => {
    return (
      <div className="item-count">
        <span>To do: { toDo }</span>
        <span>Done: { done }</span>
      </div>
    );
}

export default ItemCount;