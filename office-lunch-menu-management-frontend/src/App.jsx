import { useState } from "react";
import "./App.css";
import AddMenu from "./components/AddMenu";
import MenuList from "./components/MenuList";

function App() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      date: '2024-05-20',
      options: ['Chicken Sandwich', 'Veggie Burger', 'Salad']
    },
    {
      id: 2,
      date: '2024-05-21',
      options: ['Pizza', 'Pasta', 'Caesar Salad']
    },
    {
      id: 3,
      date: '2024-05-22',
      options: ['Sushi', 'Ramen', 'Tempura']
    },
    {
      id: 4,
      date: '2024-05-23',
      options: ['Burger', 'Fries', 'Coleslaw']
    },
    {
      id: 5,
      date: '2024-05-24',
      options: ['Tacos', 'Burrito', 'Nachos']
    }
  ]);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  return (
    <div>
      <AddMenu onAddMenu={handleAddMenu} />
      <MenuList menus={menus} />
    </div>
  );
}

export default App;
