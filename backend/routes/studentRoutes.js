const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/:id/saved-majors', studentController.getSavedMajors);

module.exports = router;