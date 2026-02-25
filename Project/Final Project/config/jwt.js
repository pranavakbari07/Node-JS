module.exports = {
  secret: process.env.JWT_SECRET || 'blog-jwt-secret-key-change-in-production',
  expiresIn: '7d',
  cookieName: 'token'
};
