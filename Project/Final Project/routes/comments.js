const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

router.post('/:id/comments', commentController.create);
router.delete('/:id/comments/:commentId', commentController.delete);

module.exports = router;
