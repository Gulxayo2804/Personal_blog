const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const {cretaeArticle, getAll, deleteArticle, getById, updateArticle} = require('../controllers/articleController')

router.post('/add', cretaeArticle);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/edit/:id', updateArticle);
router.delete('/delete/:id', deleteArticle);

module.exports = router;