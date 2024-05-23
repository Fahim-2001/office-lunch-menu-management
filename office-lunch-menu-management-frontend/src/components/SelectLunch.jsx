import axios from "axios";
import { useState } from "react";

const SelectLunch = ({ menu }) => {
  const [choices, setChoices] = useState([]);
  const [employeeName, setEmployeeName] = useState("");

  const handleCheckboxChange = (option) => {
    if (choices.includes(option)) {
      setChoices(choices.filter((item) => item !== option));
    } else {
      setChoices([...choices, option]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    if (choices.length === 0) {
      alert("Please select at least one lunch option.");
      return;
    }
    const choiceData = {
      employeeName: employeeName.trim(),
      date: menu.date,
      choices: choices.slice(),
    };
    axios.post("http://localhost:3000/api/choices", choiceData).then((res) => {
      if (res.status === 201) {
        alert(
          `Thank you, ${employeeName.trim()}! You have selected ${choices.join(
            ", "
          )} for lunch.`
        );
      }
    });
    setEmployeeName("");
    setChoices([]);
  };

  return (
    <div className="select-lunch">
      <h2>Select Your Lunch</h2>
      {menu ? (
        <form onSubmit={handleSubmit}>
          <div>
            <h3>{new Date(menu.date).toDateString()}</h3>
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
              {menu.options.map((option) => (
                <li key={option} style={{ display: "flex" }}>
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
