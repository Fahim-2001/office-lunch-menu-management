import React, { useState } from 'react';

const MenuList = ({ menus }) => {
  return (
    <div>
      <h1>Daily Menus</h1>
      {menus.map(menu => (
        <div key={menu.id}>
          <h2>{new Date(menu.date).toDateString()}</h2>
          <ul>
            {menu.options.map(option => <li key={option}>{option}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
