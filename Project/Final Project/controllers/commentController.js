const Article = require('../models/Article');
const Comment = require('../models/Comment');

exports.create = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).redirect('/articles');
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.redirect(`/articles/${req.params.id}?error=Comment+content+required`);
    }
    const comment = await Comment.create({
      content: content.trim(),
      article: article._id,
      author: req.user._id
    });
    article.comments.push(comment._id);
    await article.save();
    res.redirect(`/articles/${article._id}`);
  } catch (err) {
    res.redirect(`/articles/${req.params.id}`);
  }
};

exports.delete = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).redirect('/articles');
    const isAuthor = String(comment.author) === String(req.user._id);
    const isAdmin = req.user.role === 'admin';
    if (!isAuthor && !isAdmin) return res.status(403).redirect('/articles');
    await Article.findByIdAndUpdate(comment.article, { $pull: { comments: comment._id } });
    await Comment.findByIdAndDelete(req.params.commentId);
    res.redirect(`/articles/${comment.article}`);
  } catch (err) {
    res.redirect('/articles');
  }
};
