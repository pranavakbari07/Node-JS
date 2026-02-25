const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { requireAuth } = require('../middleware/auth');

router.get('/', articleController.list);
router.get('/my', requireAuth, articleController.myArticles);
router.get('/new', requireAuth, articleController.getForm);
router.get('/:id/edit', requireAuth, articleController.getEditForm);
router.get('/:id', articleController.show);
router.post('/', requireAuth, articleController.create);
router.put('/:id', requireAuth, articleController.update);
router.delete('/:id', requireAuth, articleController.delete);

module.exports = router;
