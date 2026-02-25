const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtConfig = require('../config/jwt');

exports.getRegister = (req, res) => {
  if (req.user) return res.redirect('/articles');
  res.render('register', { title: 'Register' });
};

exports.postRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).render('register', {
        title: 'Register',
        error: 'Name, email and password are required'
      });
    }
    const existing = await User.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      return res.status(400).render('register', {
        title: 'Register',
        error: 'Email already registered'
      });
    }
    const user = await User.create({ name: name.trim(), email: email.trim().toLowerCase(), password, role: 'user' });
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );
    res.cookie(jwtConfig.cookieName, token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.redirect('/articles');
  } catch (err) {
    res.status(500).render('register', {
      title: 'Register',
      error: err.message || 'Registration failed'
    });
  }
};

exports.getLogin = (req, res) => {
  if (req.user) return res.redirect('/articles');
  res.render('login', { title: 'Login' });
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render('login', {
        title: 'Login',
        error: 'Email and password are required'
      });
    }
    const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).render('login', {
        title: 'Login',
        error: 'Invalid email or password'
      });
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );
    res.cookie(jwtConfig.cookieName, token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.redirect('/articles');
  } catch (err) {
    res.status(500).render('login', {
      title: 'Login',
      error: err.message || 'Login failed'
    });
  }
};

exports.logout = (req, res) => {
  res.clearCookie(jwtConfig.cookieName);
  res.redirect('/login');
};
