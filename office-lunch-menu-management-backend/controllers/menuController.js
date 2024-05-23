const pool = require("../db");

const getAllMenus = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menus");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching menus:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createMenu = async (req, res) => {
  try {
    const { date, options } = req.body;
    const result = await pool.query(
      "INSERT INTO menus (date, options) VALUES ($1, $2) RETURNING *",
      [date, options]
    );
    const menuDate = new Date(result.rows[0].date.toLocaleString("en-US", {timeZone: "UTC"}));
    const menu = {
      id: result.rows[0].id,
      date: menuDate.toISOString().split('T')[0],
      options: result.rows[0].options
    };
    res.status(201).json(menu);
  } catch (error) {
    console.error("Error creating menu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllMenus, createMenu };
