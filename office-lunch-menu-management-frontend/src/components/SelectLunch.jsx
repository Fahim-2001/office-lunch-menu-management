import React, { useState } from 'react';

const SelectLunch = ({ menu, onChoiceSubmit }) => {
  const [choices, setChoices] = useState([]);
  const [employeeName, setEmployeeName] = useState('');

  const handleCheckboxChange = (option) => {
    if (choices.includes(option)) {
      setChoices(choices.filter(item => item !== option));
    } else {
      setChoices([...choices, option]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (choices.length === 0) {
      alert('Please select at least one lunch option.');
      return;
    }
    const choiceData = {
      employeeName: employeeName.trim(),
      date: menu.date,
      choices: choices.slice() // Copy choices array to prevent mutations
    };
    onChoiceSubmit(choiceData);
    alert(`Thank you, ${employeeName.trim()}! You have selected ${choices.join(', ')} for lunch.`);
    setEmployeeName('');
    setChoices([]);
  };

  return (
    <div>
      <h1>Select Your Lunch</h1>
      {menu ? (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>{new Date(menu.date).toDateString()}</h2>
            <div>
              <label>Employee Name:</label>
              <input
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                required
              />
            </div>
            <ul>
              {menu.options.map((option, index) => (
                <li key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={choices.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <label>{option}</label>
                </li>
              ))}
            </ul>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>No menu available for today.</p>
      )}
    </div>
  );
};

export default SelectLunch;
