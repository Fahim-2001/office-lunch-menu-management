const express = require('express');
const router = express.Router();
const choiceController = require('../controllers/choiceController');

router.get('/choices', choiceController.getAllChoices);
router.post('/choices', choiceController.createChoice);

module.exports = router;
