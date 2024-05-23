const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController.js');

router.get('/menus', menuController.getAllMenus);
router.post('/menus', menuController.createMenu);

module.exports = router;
