# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## High-level Code Architecture

This project is a Node.js application built with the Express.js framework. It uses MongoDB as its database, with Mongoose as the ODM (Object Data Modeling) library.

**Key architectural components:**
- **Entry Point:** `index.js` initializes the Express app, connects to the database, sets up middleware (JSON parsing, URL-encoded data, cookie parsing), and mounts the main API routes.
- **Database Connection:** Handled by `database/connection.js`, which establishes the connection to MongoDB using Mongoose.
- **Routes:** Defined in the `routes/` directory (e.g., `auth.routes.js`). These files define API endpoints and link them to corresponding controller functions.
- **Controllers:** Located in the `controllers/` directory (e.g., `auth.controllers.js`, `customer.controllers.js`). Controllers contain the business logic for handling requests and interacting with models.
- **Models:** Defined in the `models/` directory (e.g., `user.models.js`, `customer.model.js`, `invoice.models.js`). These Mongoose schemas define the structure and behavior of data stored in MongoDB.
- **Utilities & Helpers:** The `helpers/` and `utils/` directories are used for reusable functions and utilities (e.g., `welcome.js`).
- **Environment Variables:** Managed using `dotenv` for configuration.

## Commonly Used Commands

- **Install dependencies:** `npm install`
- **Start the server (production):** `npm start`
- **Start the server (development with nodemon):** `npm run dev`
