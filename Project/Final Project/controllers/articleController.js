const Article = require('../models/Article');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.list = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate('author', 'name')
      .populate('comments')
      .sort({ createdAt: -1 });
    res.render('articleList', { title: 'All Articles', articles, user: req.user });
  } catch (err) {
    res.status(500).render('error', { title: 'Error', message: err.message });
  }
};

exports.myArticles = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user._id })
      .populate('author', 'name')
      .populate('comments')
      .sort({ createdAt: -1 });
    res.render('myArticles', { title: 'My Articles', articles, user: req.user });
  } catch (err) {
    res.status(500).render('error', { title: 'Error', message: err.message });
  }
};

exports.getForm = (req, res) => {
  res.render('articleForm', { title: 'New Article', article: null, user: req.user });
};

exports.getEditForm = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).render('404', { title: 'Not Found' });
    const isAuthor = String(article.author) === String(req.user._id);
    const isAdmin = req.user.role === 'admin';
    if (!isAuthor && !isAdmin) return res.status(403).render('403', { title: 'Forbidden' });
    res.render('articleForm', { title: 'Edit Article', article, user: req.user });
  } catch (err) {
    res.status(500).render('error', { title: 'Error', message: err.message });
  }
};

exports.show = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate('author', 'name')
      .populate({ path: 'comments', populate: { path: 'author', select: 'name' } });
    if (!article) return res.status(404).render('404', { title: 'Not Found' });
    res.render('articleItem', { title: article.title, article, user: req.user });
  } catch (err) {
    res.status(500).render('error', { title: 'Error', message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).render('articleForm', {
        title: 'New Article',
        article: null,
        error: 'Title and content are required',
        user: req.user
      });
    }
    const article = await Article.create({ title, content, author: req.user._id });
    await User.findByIdAndUpdate(req.user._id, { $push: { articles: article._id } });
    res.redirect(`/articles/${article._id}`);
  } catch (err) {
    res.status(500).render('articleForm', {
      title: 'New Article',
      article: null,
      error: err.message,
      user: req.user
    });
  }
};

exports.update = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).render('404', { title: 'Not Found' });
    const isAuthor = String(article.author) === String(req.user._id);
    const isAdmin = req.user.role === 'admin';
    if (!isAuthor && !isAdmin) return res.status(403).render('403', { title: 'Forbidden' });
    const { title, content } = req.body;
    article.title = title || article.title;
    article.content = content || article.content;
    await article.save();
    res.redirect(`/articles/${article._id}`);
  } catch (err) {
    res.status(500).render('articleForm', {
      title: 'Edit Article',
      article: req.body,
      error: err.message,
      user: req.user
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).render('404', { title: 'Not Found' });
    const isAuthor = String(article.author) === String(req.user._id);
    const isAdmin = req.user.role === 'admin';
    if (!isAuthor && !isAdmin) return res.status(403).render('403', { title: 'Forbidden' });
    await Comment.deleteMany({ article: article._id });
    await Article.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(article.author, { $pull: { articles: article._id } });
    res.redirect('/articles');
  } catch (err) {
    res.status(500).redirect('/articles');
  }
};
