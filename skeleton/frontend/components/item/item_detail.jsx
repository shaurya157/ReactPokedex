import React from 'react';

export const ItemDetail = ({item}) => {

  return (
    <div>
      <ul>
        <li>
          {item.name}
        </li>
        <li>{item.price}</li>
        <li>{item.happiness}</li>
      </ul>
    </div>);
};
