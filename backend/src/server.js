import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Decision Support Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// Basic API routes
app.get("/api/dashboard", (req, res) => {
  res.json({
    status: "success",
    data: {
      totalRevenue: 125000,
      totalExpenses: 45000,
      netProfit: 80000,
      cashFlow: 35000,
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    error:
      process.env.NODE_ENV === "development" ? err.message : "Unknown error",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/api/dashboard`);
  console.log(`💓 Health check: http://localhost:${PORT}/api/health`);
});
