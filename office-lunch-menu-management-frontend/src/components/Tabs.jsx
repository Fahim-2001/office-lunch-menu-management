import React, { useState } from 'react';
import AddMenu from './AddMenu';
import MenuList from './MenuList';
import ViewChoices from './ViewChoices';
import TodayMenu from './TodayMenu';
import SelectLunch from './SelectLunch';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('admin');
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

  const [choices, setChoices] = useState([]);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  const handleChoiceSubmit = (choiceData) => {
    setChoices([...choices, choiceData]);
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('admin')} className={activeTab === 'admin' ? 'active' : ''}>Admin</button>
        <button onClick={() => setActiveTab('employee')} className={activeTab === 'employee' ? 'active' : ''}>Employee</button>
      </div>
      <div className="tab-content">
        {activeTab === 'admin' && (
          <div>
            <AddMenu onAddMenu={handleAddMenu} />
            <MenuList menus={menus} />
            <ViewChoices choices={choices} />
          </div>
        )}
        {activeTab === 'employee' && (
          <div>
            <TodayMenu menus={menus} />
            <SelectLunch menu={menus.find(menu => menu.date === new Date().toISOString().split('T')[0])} onChoiceSubmit={handleChoiceSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
