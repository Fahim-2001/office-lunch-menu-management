
const MenuList = ({ menus }) => {
  return (
    <div className="menu-list">
      <h2>Menu List</h2>
      {menus.length === 0 ? (
        <p>No menus available.</p>
      ) : (
        <ul>
          {menus.map(menu => (
            <li key={menu.date} className="menu-item">
              <h3>{new Date(menu.date).toDateString()}</h3>
              <p>{menu.options.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuList;
