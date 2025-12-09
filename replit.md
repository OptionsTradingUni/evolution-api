# Evolution API

## Overview
Evolution API is a REST API for communication with WhatsApp. It provides an interface to send and receive messages, manage contacts, groups, and integrate with various services like Typebot, Chatwoot, OpenAI, and more.

## Current State
- **Version**: 2.3.7
- **Status**: Running and operational
- **Port**: 5000

## Project Structure
```
├── src/                    # Source code
│   ├── api/               # API routes and controllers
│   ├── config/            # Configuration files
│   ├── cache/             # Caching logic
│   ├── libs/              # External library wrappers
│   ├── utils/             # Utility functions
│   └── validate/          # Validation schemas
├── prisma/                # Database schema and migrations
│   ├── postgresql-schema.prisma
│   └── postgresql-migrations/
├── public/                # Static files
└── manager/              # Manager UI assets
```

## Technology Stack
- **Runtime**: Node.js 20
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL (via Prisma ORM)
- **Build Tool**: tsup
- **Dev Runner**: tsx

## Environment Variables
Key environment variables configured:
- `SERVER_PORT=5000` - API server port
- `DATABASE_CONNECTION_URI` - PostgreSQL connection string
- `AUTHENTICATION_API_KEY` - API authentication key
- `CACHE_REDIS_ENABLED=false` - Redis disabled (using local cache)
- `CACHE_LOCAL_ENABLED=true` - Local cache enabled

## Running the Application
```bash
npm run start       # Start production server
npm run dev:server  # Start development server with hot reload
npm run db:generate # Generate Prisma client
npm run db:deploy   # Run database migrations
```

## API Endpoints
- `GET /` - Health check / welcome message
- `GET /docs` - Swagger API documentation
- `GET /manager` - Management interface

## Recent Changes
- **Dec 2024**: Initial Replit setup
  - Configured to run on port 5000
  - Set up PostgreSQL database with Prisma
  - Applied 57 database migrations
  - Disabled Redis (using local cache instead)
  - Disabled telemetry
