const TodayMenu = ({ menus }) => {
  const today = new Date().toISOString().split('T')[0];
  const todayMenu = menus.find(menu => menu.date === today);

  return (
    <div>
      <h1>Today's Menu</h1>
      {todayMenu ? (
        <div>
          <h2>{new Date(todayMenu.date).toDateString()}</h2>
          <ul>
            {todayMenu.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No menu available for today.</p>
      )}
    </div>
  );
};

export default TodayMenu;
