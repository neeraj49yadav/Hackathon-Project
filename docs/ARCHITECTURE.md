# System Architecture

## Overview

The Real-Time Decision Support System is built using a modern, scalable architecture designed to provide real-time analytics and AI-powered business insights.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                               │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐  │
│  │  React Frontend  │  │  Mobile App      │  │  Web Browser │  │
│  └────────┬─────────┘  └────────┬─────────┘  └──────┬───────┘  │
└───────────┼──────────────────────┼──────────────────┼─────────────┘
            │                      │                  │
            └──────────────────────┼──────────────────┘
                                   │ (HTTP/WebSocket)
                   ┌───────────────┴────────────────┐
                   │                                │
┌──────────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Express.js Server (Port 5000)                           │   │
│  │  - CORS Middleware                                       │   │
│  │  - Authentication & JWT                                  │   │
│  │  - Request Logging                                       │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────┬─────────────────────────────────┬──────────────────┘
               │                                 │
               ├─────────────────────────────────┤
               │                                 │
┌──────────────────────────────────┐  ┌────────────────────────────┐
│      BUSINESS LOGIC LAYER        │  │   REAL-TIME LAYER         │
│  ┌────────────────────────────┐  │  │  ┌─────────────────────┐   │
│  │  Dashboard Controller      │  │  │  │  Socket.io Server   │   │
│  │  Analytics Controller      │  │  │  │  - Live Updates     │   │
│  │  Sales Controller          │  │  │  │  - Notifications    │   │
│  │  Inventory Controller      │  │  │  │  - Broadcasting     │   │
│  │  Alerts Controller         │  │  │  └─────────────────────┘   │
│  │  AI & Prediction Service   │  │  │                            │
│  └────────────────────────────┘  │  │                            │
└──────────────┬────────────────────┘  └──────────┬─────────────────┘
               │                                  │
               └──────────────────┬───────────────┘
                                  │
┌─────────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  PostgreSQL Database                                     │   │
│  │  - Users & Authentication                               │   │
│  │  - Financial Data                                        │   │
│  │  - Sales & Transactions                                  │   │
│  │  - Inventory                                             │   │
│  │  - Alerts & Notifications                                │   │
│  │  - Analytics & Metrics                                   │   │
│  │  - Predictions & ML Models                               │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

### Frontend (React)

- **Pages**: Dashboard, Analytics, Sales, Inventory, Reports
- **Components**: Charts, Tables, Forms, Alerts
- **Services**: API client, WebSocket connection
- **State Management**: Context API / Redux
- **Real-time Updates**: Socket.io client

### Backend (Node.js/Express)

- **Controllers**: Handle HTTP requests
- **Services**: Business logic implementation
- **Models**: Database access layer
- **Middleware**: Authentication, validation, logging
- **AI/ML**: Prediction and analytics engines
- **WebSocket**: Real-time event broadcasting

### Database (PostgreSQL)

- **Relational Schema**: Normalized data structure
- **Tables**: Users, Businesses, Financial, Sales, Inventory
- **Indexes**: Optimized queries
- **Transactions**: ACID compliance

## Data Flow

### 1. User Authentication

```
User Login → API Server → Validate Credentials →
Generate JWT Token → Return to Client → Store in Session
```

### 2. Dashboard Data Display

```
Frontend Request → Express Router → Controller →
Service Logic → Database Query → Data Processing →
JSON Response → Frontend Render
```

### 3. Real-time Updates

```
Backend Event Triggered → Socket.io Emit →
Connected Clients Receive → Frontend Update DOM →
Real-time Display
```

### 4. AI Predictions

```
Historical Data Analysis → ML Algorithm Processing →
Trend Detection → Forecast Generation → Store in DB →
Display to User
```

## Security Architecture

- **Authentication**: JWT tokens with expiration
- **Authorization**: Role-based access control (RBAC)
- **Data Encryption**: HTTPS/TLS for data in transit
- **Input Validation**: Request sanitization
- **SQL Injection Prevention**: Parameterized queries
- **CORS**: Controlled cross-origin requests

## Scalability Considerations

- **Database**: Connection pooling, read replicas
- **Caching**: Redis for frequently accessed data
- **Load Balancing**: Horizontal scaling of API servers
- **CDN**: Static asset delivery
- **Microservices Ready**: Modular architecture for future separation

## Technology Stack Details

| Layer             | Technology   | Version |
| ----------------- | ------------ | ------- |
| Frontend          | React        | 18.2.0  |
| Frontend Build    | Vite         | 4.2.1   |
| Frontend Styling  | Tailwind CSS | 3.3.0   |
| Backend           | Node.js      | 18+     |
| Backend Framework | Express      | 4.18.2  |
| Database          | PostgreSQL   | 12+     |
| Real-time         | Socket.io    | 4.6.1   |
| Authentication    | JWT          | -       |
| Containers        | Docker       | -       |

---

Last Updated: April 2026
