const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.get('/fetchTexts', controller.getText);
router.post('/addText', controller.addText);
router.delete('/deleteTexts', controller.deleteTexts);

module.exports = router;
