const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');

const { authenticate } = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Parse JWT and attach user to request for all routes
app.use(authenticate);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogdb';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Pass user to all views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});
app.use('/', authRoutes);
app.use('/articles', articleRoutes);
app.use('/articles', commentRoutes);

// Home redirect - show register page first
app.get('/', (req, res) => res.redirect('/register'));

// 404 handler
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
