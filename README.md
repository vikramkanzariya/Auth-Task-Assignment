# Vikram Practical Task - Backend API

A Node.js and Express-based backend API for task management with user authentication.

## Features

- User authentication with JWT and bcrypt
- Task management (CRUD operations)
- MongoDB database integration
- CORS enabled
- Environment-based configuration
- RESTful API design

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT + bcrypt
- **Utilities:** dotenv, CORS

## Project Structure

```
src/
├── app.js                 # Express app configuration
├── server.js              # Server entry point
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── taskController.js  # Task management logic
├── middlewares/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── User.js            # User schema
│   └── Task.js            # Task schema
└── routes/
    ├── authRoutes.js      # Authentication endpoints
    └── taskRoutes.js      # Task endpoints
```

## Installation
### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment configuration:**
   
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   JWT_SECRET=your_jwt_secret_key_here
   ```
  

## Running the Project

### Development Mode (with auto-reload)

```bash
npm run dev

# start command
npm start or nodemon src/server.js
```

*Note: Add `"dev": "nodemon src/server.js"` to `scripts` in package.json for development with auto-reload*

### Production Mode

```bash
npm start
```

*Note: Add `"start": "node src/server.js"` to `scripts` in package.json*

# With nodemon for development
npx nodemon src/server.js
```

## API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Task Routes (`/tasks`)
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get task by ID
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task


## Getting Started

1. Install dependencies: `npm install`
2. Configure `.env` file with MongoDB URI and JWT secret
3. Run the server: 
4. Server will start on the configured PORT (default: 3000)

