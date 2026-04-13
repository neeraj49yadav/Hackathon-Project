# API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

All endpoints (except `/auth/login` and `/auth/register`) require JWT token in headers:

```
Authorization: Bearer <your_jwt_token>
```

---

## Endpoints

### Health Check

```
GET /health
```

**Response:**

```json
{
  "status": "success",
  "message": "Decision Support Backend is running",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Dashboard

```
GET /dashboard
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "totalRevenue": 125000,
    "totalExpenses": 45000,
    "netProfit": 80000,
    "cashFlow": 35000
  }
}
```

### Authentication

#### Register

```
POST /auth/register
```

**Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "My Business"
}
```

#### Login

```
POST /auth/login
```

**Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Response:**

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John"
  }
}
```

### Financial Data

#### Get Financial Overview

```
GET /financial/overview
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "totalRevenue": 125000,
    "totalExpenses": 45000,
    "profit": 80000,
    "cashFlow": 35000,
    "profitMargin": 64
  }
}
```

#### Get Financial History

```
GET /financial/history?startDate=2024-01-01&endDate=2024-12-31
```

#### Add Financial Record

```
POST /financial/record
```

**Body:**

```json
{
  "revenue": 50000,
  "expenses": 20000,
  "profit": 30000,
  "cashFlow": 15000,
  "dateRecorded": "2024-01-15"
}
```

### Sales Analytics

#### Get Sales Summary

```
GET /sales/summary
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "totalSales": 150000,
    "numberOfTransactions": 245,
    "averageOrderValue": 612,
    "topProduct": "Product A"
  }
}
```

#### Get Sales by Period

```
GET /sales/period?period=monthly&year=2024
```

#### Add Sale

```
POST /sales/record
```

**Body:**

```json
{
  "productName": "Product A",
  "quantity": 10,
  "unitPrice": 100,
  "customerId": "CUST001",
  "dateSold": "2024-01-15"
}
```

### Inventory Management

#### Get Inventory Status

```
GET /inventory/status
```

**Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "productName": "Product A",
      "quantityInStock": 150,
      "reorderLevel": 50,
      "status": "optimal"
    },
    {
      "id": 2,
      "productName": "Product B",
      "quantityInStock": 15,
      "reorderLevel": 50,
      "status": "low"
    }
  ]
}
```

#### Update Inventory

```
PUT /inventory/:productId
```

**Body:**

```json
{
  "quantityInStock": 200,
  "reorderLevel": 50
}
```

#### Add Product

```
POST /inventory/add
```

**Body:**

```json
{
  "productName": "New Product",
  "quantityInStock": 100,
  "reorderLevel": 20,
  "unitCost": 50
}
```

### Alerts

#### Get Active Alerts

```
GET /alerts/active
```

**Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "type": "inventory",
      "title": "Low Stock Alert",
      "message": "Product B is running low",
      "severity": "high",
      "createdAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

#### Mark Alert as Read

```
PUT /alerts/:alertId/read
```

#### Clear All Alerts

```
DELETE /alerts/clear
```

### Analytics & Predictions

#### Get Predictions

```
GET /analytics/predictions
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "revenueForTomorrow": 5000,
    "expectedSales": 35,
    "suggestedInventory": "Reorder Product C",
    "trend": "upward"
  }
}
```

#### Get Analytics Report

```
GET /analytics/report?period=monthly
```

---

## Error Responses

### 400 Bad Request

```json
{
  "status": "error",
  "message": "Invalid request parameters",
  "errors": ["email is required"]
}
```

### 401 Unauthorized

```json
{
  "status": "error",
  "message": "Invalid or missing authentication token"
}
```

### 403 Forbidden

```json
{
  "status": "error",
  "message": "You do not have permission to access this resource"
}
```

### 404 Not Found

```json
{
  "status": "error",
  "message": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

---

## WebSocket Events

### Connect

```javascript
socket.on("connect", () => {
  console.log("Connected to real-time updates");
});
```

### Subscribe to Business Updates

```javascript
socket.emit("subscribe", { businessId: 1 });
```

### Receive Real-time Update

```javascript
socket.on("businessUpdate", (data) => {
  console.log("Business update received:", data);
});
```

### Disconnect

```javascript
socket.on("disconnect", () => {
  console.log("Disconnected from real-time updates");
});
```

---

## Rate Limiting

- **Default**: 100 requests per 15 minutes per IP
- **Auth endpoints**: 5 requests per minute
- **Response Header**: `X-RateLimit-Remaining`

---

## Pagination

List endpoints support pagination:

```
GET /sales?page=1&limit=20
```

**Response:**

```json
{
  "status": "success",
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

Last Updated: April 2026
