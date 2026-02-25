# Blog Project

A full-featured blog with JWT authentication, cookie-based sessions, role-based access control, and multiuser support.

## Features

- **Authentication**: Register, login, logout with JWT stored in HTTP-only cookies
- **Role-based access**: Admin and user roles
- **CRUD articles**: Create, read, update, delete articles (with authorization)
- **Comments**: Add and delete comments on articles
- **Multiuser**: Each user sees their own articles in "My Articles"
- **Stylish dark theme**: Modern editorial design with responsive layout

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start MongoDB (local or Atlas). Default connection: `mongodb://localhost:27017/blogdb`

3. Run the server (builds Tailwind CSS automatically):
   ```bash
   npm start
   ```

4. For development with auto-reload CSS:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Environment Variables

- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/blogdb)
- `JWT_SECRET` - Secret for signing JWT (change in production)

## Create Admin User

To create an admin user, use MongoDB shell or Compass and update a user's role:

```javascript
db.users.updateOne({ email: "your@email.com" }, { $set: { role: "admin" } })
```

Or register normally and update via MongoDB.

## Routes

| Route | Auth | Description |
|-------|------|-------------|
| GET /articles | - | All articles |
| GET /articles/my | Yes | User's articles |
| GET /articles/new | Yes | New article form |
| GET /articles/:id | - | Article detail |
| GET /articles/:id/edit | Yes | Edit form (author/admin) |
| POST /articles | Yes | Create article |
| PUT /articles/:id | Yes | Update (author/admin) |
| DELETE /articles/:id | Yes | Delete (author/admin) |
| POST /articles/:id/comments | Yes | Add comment |
| DELETE /articles/:id/comments/:commentId | Yes | Delete comment |
| GET /register | - | Register form |
| POST /register | - | Register |
| GET /login | - | Login form |
| POST /login | - | Login |
| GET /logout | - | Logout |
