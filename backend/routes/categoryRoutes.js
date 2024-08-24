const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers'); // Verifique o caminho e a importação

// Certifique-se de que a função `getCategories` esteja definida e exportada corretamente no controller
router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);

module.exports = router;
