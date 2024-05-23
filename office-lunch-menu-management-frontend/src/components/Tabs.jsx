import { useEffect, useState } from "react";
import AddMenu from "./AddMenu";
import MenuList from "./MenuList";
import ViewChoices from "./ViewChoices";
import TodayMenu from "./TodayMenu";
import SelectLunch from "./SelectLunch";
import axios from "axios";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("admin");
  const [menus, setMenus] = useState([]);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/menus")
      .then((res) => setMenus(res?.data));

    axios
      .get("http://localhost:3000/api/choices")
      .then((res) => setChoices(res?.data));
  }, []);

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("admin")}
          className={activeTab === "admin" ? "active" : ""}
        >
          Admin
        </button>
        <button
          onClick={() => setActiveTab("employee")}
          className={activeTab === "employee" ? "active" : ""}
        >
          Employee
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "admin" && (
          <div className="container">
            <AddMenu />
            <MenuList menus={menus} />
            <ViewChoices choices={choices} />
          </div>
        )}
        {activeTab === "employee" && (
          <div className="container">
            <TodayMenu menus={menus} />
            <SelectLunch
              menu={menus.find(
                (menu) => menu.date === new Date().toISOString().split("T")[0]
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
