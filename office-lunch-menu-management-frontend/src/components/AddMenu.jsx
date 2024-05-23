import React, { useState } from 'react';

const AddMenu = ({ onAddMenu }) => {
  const [date, setDate] = useState('');
  const [options, setOptions] = useState(['']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = {
      id: Date.now(), // Generate a unique ID for the menu
      date,
      options
    };
    onAddMenu(newMenu);
    setDate('');
    setOptions(['']);
  };

  return (
    <div>
      <h1>Add New Menu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date: </label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        {options.map((option, index) => (
          <div key={index}>
            <label>Option {index + 1}: </label>
            <input 
              type="text" 
              value={option} 
              onChange={(e) => handleOptionChange(index, e.target.value)} 
              required 
            />
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>Add Another Option</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMenu;
