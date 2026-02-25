const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const User = require('../models/User');

// Verify JWT and attach user to request
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies[jwtConfig.cookieName];
    if (!token) {
      req.user = null;
      return next();
    }
    const decoded = jwt.verify(token, jwtConfig.secret);
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      res.clearCookie(jwtConfig.cookieName);
      req.user = null;
      return next();
    }
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie(jwtConfig.cookieName);
    req.user = null;
    next();
  }
};

// Require authentication (redirect to login if not logged in)
const requireAuth = (req, res, next) => {
  if (!req.user) {
    req.flash ? req.flash('error', 'Please log in to continue') : null;
    return res.redirect('/login');
  }
  next();
};

// Require admin role
const requireAdmin = (req, res, next) => {
  if (!req.user) return res.redirect('/login');
  if (req.user.role !== 'admin') {
    return res.status(403).render('403', { title: 'Forbidden' });
  }
  next();
};

module.exports = { authenticate, requireAuth, requireAdmin };
