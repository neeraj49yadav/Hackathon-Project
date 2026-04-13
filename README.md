# Real-Time Decision Support System for Small Businesses

A comprehensive web application designed to help small business owners make data-driven decisions in real-time with AI-powered insights, predictive analytics, and actionable recommendations.

## 🎯 Features

- **Real-Time Analytics Dashboard** - Live business metrics and KPIs
- **Predictive Analytics** - AI-powered forecasting and trend analysis
- **Decision Recommendations** - AI-generated actionable insights
- **Financial Overview** - Revenue, expenses, profitability tracking
- **Inventory Management** - Real-time stock levels and alerts
- **Sales Analytics** - Customer trends and sales patterns
- **Alerts & Notifications** - Real-time business alerts
- **Customizable Reports** - Generate automated business reports

## 📁 Project Structure

```
Hackathon-Project/
├── frontend/                 # React-based web application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Node.js/Express API server
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   ├── services/        # Business logic services
│   │   ├── ai/              # AI/ML integration
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
├── database/                # Database setup
│   ├── migrations/          # Database migrations
│   ├── seeds/               # Initial data seeds
│   └── schema.sql
│
├── docs/                    # Documentation
│   ├── API.md               # API documentation
│   ├── ARCHITECTURE.md      # System architecture
│   └── SETUP.md             # Setup guide
│
└── docker-compose.yml       # Docker services configuration
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Chart.js/D3.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Real-time**: Socket.io
- **AI/ML**: Node-based prediction models
- **Authentication**: JWT
- **Hosting**: Docker

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional, for containerization) - [Download](https://www.docker.com/)

Verify installations:

```bash
node --version
npm --version
psql --version
git --version
```

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
cd c:\Users\Dell\OneDrive\Desktop\Hackathon-Project
git clone https://github.com/neeraj49yadav/Hackathon-Project.git
cd Hackathon-Project
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Update .env with your configuration
# - Database credentials
# - API keys
# - JWT secret
# - Port number

# Run database migrations
npm run migrate

# Start the server
npm start
```

**Backend Environment Variables (.env):**

```
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/decision_support
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### Step 3: Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
echo VITE_API_URL=http://localhost:5000 > .env

# Start development server
npm run dev
```

**Frontend will be available at:** `http://localhost:5173`

### Step 4: Database Setup

```bash
cd ../database

# Create PostgreSQL database
psql -U postgres -c "CREATE DATABASE decision_support;"

# Run schema
psql -U postgres -d decision_support -f schema.sql

# Run seeds (optional)
psql -U postgres -d decision_support -f seeds/initial_data.sql
```

### Step 5: Verify Installation

1. Backend running: `http://localhost:5000/api/health`
2. Frontend running: `http://localhost:5173`
3. Database connected: Check backend logs

## 🐳 Docker Setup (Alternative)

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📝 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
```

### Backend

```bash
npm start            # Start server
npm run dev          # Start with nodemon (dev mode)
npm run migrate      # Run database migrations
npm run seed         # Seed initial data
npm test             # Run tests
```

## 🔑 Default Credentials

After initial setup, use these test credentials:

- **Username**: admin@test.com
- **Password**: TestPassword123

## 📖 Documentation

- [API Documentation](docs/API.md) - All API endpoints
- [Architecture Guide](docs/ARCHITECTURE.md) - System design
- [Setup Guide](docs/SETUP.md) - Detailed setup instructions

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F
```

### Database Connection Error

- Verify PostgreSQL is running
- Check database credentials in .env
- Ensure database exists

### npm install Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules
npm install
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 🎓 Support & Contact

For issues or questions:

- Create an issue on GitHub
- Email: support@example.com

---

**Last Updated**: April 2026
