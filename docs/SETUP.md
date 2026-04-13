# Installation & Quick Start Guide

## 📋 Prerequisites

Before starting, ensure you have installed:

- **Node.js v18+** - [Download](https://nodejs.org/)
- **PostgreSQL 12+** - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

Verify installations:

```powershell
node --version
npm --version
psql --version
```

---

## 🚀 Quick Start (5 minutes)

### Option 1: Manual Setup

#### Step 1: Navigate to Project

```powershell
cd c:\Users\Dell\OneDrive\Desktop\Hackathon-Project\Hackathon-Project
```

#### Step 2: Setup Backend

```powershell
# Go to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env with your database credentials
notepad .env
# Update: DATABASE_URL=postgresql://postgres:password@localhost:5432/decision_support

# Start server
npm start
```

Backend will run on: **http://localhost:5000**

#### Step 3: Setup Frontend (New Terminal)

```powershell
# Go to frontend folder
cd ..\frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: **http://localhost:5173**

#### Step 4: Setup Database (New Terminal)

```powershell
# Create database
psql -U postgres -c "CREATE DATABASE decision_support;"

# Run schema
psql -U postgres -d decision_support -f ..\database\schema.sql

# Optional: Seed initial data
psql -U postgres -d decision_support -f ..\database\seeds\initial_data.sql
```

---

### Option 2: Docker Setup (Recommended)

```powershell
# From project root
docker-compose up -d

# Confirm all services running
docker-compose ps

# View logs
docker-compose logs -f
```

**Services:**

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Database: localhost:5432

---

## ✅ Verification

1. **Backend Health**

   ```powershell
   curl http://localhost:5000/api/health
   ```

   Expected: `{"status":"success","message":"..."}`

2. **Frontend Loading**
   - Open http://localhost:5173 in browser
   - Should see the dashboard page

3. **Database Connection**
   - Check backend logs for database connection messages
   - Should say "Connected to PostgreSQL" or similar

---

## 🔑 Default Test Credentials

After seeding the database:

- **Email**: admin@test.com
- **Password**: TestPassword123

---

## 📁 Important Directories

| Path                       | Purpose              |
| -------------------------- | -------------------- |
| `/backend/src/server.js`   | Backend entry point  |
| `/frontend/src/App.jsx`    | Frontend entry point |
| `/frontend/src/index.html` | HTML template        |
| `/database/schema.sql`     | Database schema      |
| `/docs/`                   | Documentation files  |

---

## 🔧 Useful Commands

### Backend

```powershell
npm start              # Run server
npm run dev           # Run with auto-reload (requires nodemon)
npm test              # Run tests
npm run migrate       # Run database migrations
npm run seed          # Seed sample data
```

### Frontend

```powershell
npm run dev           # Development server
npm run build         # Production build
npm run preview       # Preview production build
npm run lint          # Check code quality
```

### Docker

```powershell
docker-compose up         # Start all services
docker-compose ps         # List running containers
docker-compose logs       # View logs
docker-compose down       # Stop all services
docker-compose restart    # Restart services
```

---

## 🆘 Troubleshooting

### Port Already in Use

**Error**: `EADDRINUSE: address already in use :::5000`

**Solution**:

```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

### Database Connection Failed

**Error**: `connect ECONNREFUSED 127.0.0.1:5432`

**Solution**:

1. Ensure PostgreSQL is running:
   ```powershell
   # On Windows
   Services → PostgreSQL → Start
   ```
2. Verify credentials in `.env`
3. Ensure database exists:
   ```powershell
   psql -U postgres -l
   ```

### npm Modules Not Found

**Error**: `Cannot find module 'express'`

**Solution**:

```powershell
# Clear cache and reinstall
npm cache clean --force
del node_modules -Force -Recurse
npm install
```

### React Hot Reload Not Working

**Solution**:

1. Check that Vite port (5173) is available
2. Restart frontend: `Ctrl+C` then `npm run dev`
3. Hard refresh browser: `Ctrl+F5`

---

## 🌐 API Endpoints

### Test Endpoints

**Health Check**

```
GET http://localhost:5000/api/health
```

**Dashboard Data**

```
GET http://localhost:5000/api/dashboard
```

See [API.md](../docs/API.md) for complete API documentation.

---

## 📚 Project Structure Details

```
Hackathon-Project/
├── frontend/                 # React application
│   ├── src/
│   │   ├── App.jsx          # Main component
│   │   ├── main.jsx         # Entry point
│   │   ├── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite config
│   ├── tailwind.config.js   # Tailwind config
│   └── Dockerfile           # Container config
│
├── backend/                  # Node.js API
│   ├── src/
│   │   └── server.js        # Main server file
│   ├── package.json         # Dependencies
│   ├── .env.example         # Environment template
│   └── Dockerfile           # Container config
│
├── database/
│   ├── schema.sql           # Database structure
│   └── seeds/
│       └── initial_data.sql # Sample data
│
├── docs/
│   ├── API.md               # API documentation
│   ├── ARCHITECTURE.md      # System design
│   └── SETUP.md             # Setup guide (this file)
│
├── docker-compose.yml       # Docker services
├── .gitignore               # Git ignore rules
└── README.md                # Project overview
```

---

## 🎓 Next Steps

1. **Explore the Code**
   - Review the React components in `/frontend/src/components/`
   - Check the Express routes in `/backend/src/routes/`

2. **Implement Features**
   - Add authentication endpoints
   - Create dashboard components
   - Build analytics features
   - Implement real-time updates with Socket.io

3. **Customize Database**
   - Add more tables as needed
   - Modify schema in `/database/schema.sql`
   - Run migrations for changes

4. **Deploy**
   - Build Docker images
   - Push to Docker registry
   - Deploy to cloud (AWS, Azure, Heroku)

---

## 📞 Support

For issues or questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review [API.md](../docs/API.md) for API details
3. Check [ARCHITECTURE.md](../docs/ARCHITECTURE.md) for system design
4. Create a GitHub issue

---

**Last Updated**: April 2026
