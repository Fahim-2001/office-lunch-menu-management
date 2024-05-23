import axios from "axios";
import { useState } from "react";

const AddMenu = ({ onAddMenu }) => {
  const [date, setDate] = useState("");
  const [options, setOptions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date.trim() || !options.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    const newMenu = {
      date: date.trim(),
      options: options
        .trim()
        .split(",")
        .map((option) => option.trim()),
    };
    console.log(newMenu);
    axios.post("http://localhost:3000/api/menus", newMenu).then((res) => {
      if (res.status === 201){
        alert("Item added!")
      }
    });
    setDate("");
    setOptions("");
  };

  return (
    <div className="add-menu">
      <h2>Add Daily Menu Options</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Options (comma-separated):</label>
          <input
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            placeholder="e.g., Sandwich, Salad, Soup"
            required
          />
        </div>
        <button type="submit">Add Menu</button>
      </form>
    </div>
  );
};

export default AddMenu;
