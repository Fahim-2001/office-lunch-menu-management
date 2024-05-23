import React, { useState } from 'react';

const SelectLunch = ({ menus, onChoiceSubmit }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [choice, setChoice] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const choiceData = {
      employeeName,
      date: selectedMenu.date,
      choice,
    };
    onChoiceSubmit(choiceData);
    alert(`You have selected ${choice} from the menu on ${new Date(selectedMenu.date).toDateString()}`);
  };

  return (
    <div>
      <h1>Select Your Lunch</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select a menu:</label>
          <select onChange={(e) => setSelectedMenu(menus.find(menu => menu.id === parseInt(e.target.value)))}>
            <option>Select a menu</option>
            {menus.map(menu => (
              <option key={menu.id} value={menu.id}>
                {new Date(menu.date).toDateString()}
              </option>
            ))}
          </select>
        </div>
        {selectedMenu && (
          <div>
            <h2>Options</h2>
            {selectedMenu.options.map(option => (
              <div key={option}>
                <input
                  type="radio"
                  value={option}
                  name="lunch"
                  onChange={(e) => setChoice(e.target.value)}
                  required
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SelectLunch;
