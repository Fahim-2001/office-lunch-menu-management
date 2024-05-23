const pool = require('../db');

const getAllMenus = async (req, res) => {
  try {
    res.status(200).json({message:"Get menus"});
  } catch (error) {
    console.error('Error fetching menus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createMenu = async (req, res) => {
  try {
    res.status(201).json({message:"Create Menu"});
  } catch (error) {
    console.error('Error creating menu:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllMenus, createMenu };
