const pool = require("../db");

const getAllChoices = async (req, res) => {
  try {
    res.status(200).json({ message: "Get Choice" });
  } catch (error) {
    console.error("Error fetching choices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createChoice = async (req, res) => {
  try {
    res.status(201).json({ message: "Create Choice" });
  } catch (error) {
    console.error("Error creating choice:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllChoices, createChoice };
