const TodayMenu = ({ menus }) => {
  const today = new Date().toISOString().split('T')[0];
  const todayMenu = menus.find(menu => menu.date === today);

  return (
    <div className="today-menu">
      <h2>Today&apos;s Menu</h2>
      {todayMenu ? (
        <div>
          <h3>{new Date(todayMenu.date).toDateString()}</h3>
          <p>{todayMenu.options.join(', ')}</p>
        </div>
      ) : (
        <p>No menu available for today.</p>
      )}
    </div>
  );
};

export default TodayMenu;
