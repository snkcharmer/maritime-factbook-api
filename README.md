# Maritime Factbook API

This project is a NestJS API application for managing users and authentication, including MongoDB integration and JWT-based authentication.

## Table of Contents

- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Modules](#modules)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

---

## Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (Cloud or local instance)
- NestJS CLI (for development)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd maritime-factbook-api
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Setup environment**

- Copy .env.example to .env and configure the necessary variables.

4. **Run the application**

```bash
npm run dev
```

### Folder Structure

```bash
src/
├── auth/                    # Authentication module
│   ├── auth.controller.ts   # Controller for auth routes
│   ├── auth.module.ts       # Auth module setup
│   └── auth.service.ts      # Auth business logic
├── config/                  # Configuration files
│   ├── common.config.ts     # Common configuration
│   └── database.config.ts   # Database configuration
├── database/                # Database module
│   ├── database.module.ts   # Database module setup
│   └── database.service.ts  # Database connection logic
├── users/                   # Users module
│   ├── user.schema.ts       # Mongoose schema for user model
│   ├── users.controller.ts  # Controller for user routes
│   ├── users.module.ts      # User module setup
│   └── users.service.ts     # User business logic
├── app.module.ts            # Main application module
└── main.ts                  # Entry file
```

### Running the App

```bash
npm run start         # Start the app
npm run start:dev     # Start the app in development mode with hot-reloading
npm run start:prod    # Start the app in production mode
```
