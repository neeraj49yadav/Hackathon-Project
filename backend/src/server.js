import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
const transactions = [];
const alerts = [];
const users = new Map();

// ========== HEALTH CHECK ==========
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Decision Support Backend is running",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// ========== AUTHENTICATION ROUTES ==========
app.post("/api/auth/register", (req, res) => {
  try {
    const { email, password, firstName, lastName, companyName } = req.body;

    if (users.has(email)) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists" });
    }

    const userId = Date.now().toString();
    const user = {
      id: userId,
      email,
      password,
      firstName,
      lastName,
      companyName,
      createdAt: new Date(),
    };

    users.set(email, user);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        companyName: user.companyName,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.post("/api/auth/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.get(email);

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid credentials" });
    }

    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

    res.json({
      status: "success",
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        companyName: user.companyName,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// ========== DASHBOARD ROUTES ==========
app.get("/api/dashboard", (req, res) => {
  res.json({
    status: "success",
    data: {
      totalRevenue: 125000,
      totalExpenses: 45000,
      netProfit: 80000,
      cashFlow: 35000,
      profitMargin: 64,
      timestamp: new Date().toISOString(),
    },
  });
});

// ========== FINANCIAL ROUTES ==========
app.get("/api/financial/overview", (req, res) => {
  res.json({
    status: "success",
    data: {
      totalRevenue: 125000,
      totalExpenses: 45000,
      profit: 80000,
      cashFlow: 35000,
      profitMargin: 64,
      monthOverMonthGrowth: 12.5,
    },
  });
});

app.get("/api/financial/history", (req, res) => {
  const data = [
    { date: "2024-01-01", revenue: 95000, expenses: 38000, profit: 57000 },
    { date: "2024-02-01", revenue: 105000, expenses: 41000, profit: 64000 },
    { date: "2024-03-01", revenue: 125000, expenses: 45000, profit: 80000 },
  ];
  res.json({ status: "success", data });
});

app.post("/api/financial/record", (req, res) => {
  try {
    const { revenue, expenses, profit, cashFlow, dateRecorded } = req.body;

    const record = {
      id: Date.now(),
      revenue,
      expenses,
      profit: profit || revenue - expenses,
      cashFlow,
      dateRecorded,
      createdAt: new Date(),
    };

    transactions.push(record);

    res.status(201).json({
      status: "success",
      message: "Financial record added",
      data: record,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// ========== SALES ROUTES ==========
app.get("/api/sales/summary", (req, res) => {
  res.json({
    status: "success",
    data: {
      totalSales: 150000,
      numberOfTransactions: 245,
      averageOrderValue: 612.24,
      topProduct: "Product A",
      conversionRate: 3.2,
    },
  });
});

app.get("/api/sales/by-period", (req, res) => {
  const salesData = [
    { period: "January", sales: 32000, transactions: 52 },
    { period: "February", sales: 38000, transactions: 64 },
    { period: "March", sales: 46000, transactions: 78 },
  ];
  res.json({ status: "success", data: salesData });
});

app.get("/api/sales/top-products", (req, res) => {
  res.json({
    status: "success",
    data: [
      { name: "Product A", sales: 45000, growth: 12.5, quantity: 450 },
      { name: "Product B", sales: 38000, growth: 8.3, quantity: 380 },
      { name: "Product C", sales: 32000, growth: 5.1, quantity: 320 },
    ],
  });
});

app.post("/api/sales/record", (req, res) => {
  try {
    const { productName, quantity, unitPrice, customerId, dateSold } = req.body;

    const sale = {
      id: Date.now(),
      productName,
      quantity,
      unitPrice,
      totalAmount: quantity * unitPrice,
      customerId,
      dateSold,
      createdAt: new Date(),
    };

    transactions.push(sale);

    res.status(201).json({
      status: "success",
      message: "Sale recorded",
      data: sale,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// ========== INVENTORY ROUTES ==========
app.get("/api/inventory/status", (req, res) => {
  res.json({
    status: "success",
    data: [
      {
        id: 1,
        productName: "Product A",
        quantityInStock: 150,
        reorderLevel: 50,
        status: "optimal",
        unitCost: 25,
      },
      {
        id: 2,
        productName: "Product B",
        quantityInStock: 15,
        reorderLevel: 50,
        status: "low",
        unitCost: 35,
      },
      {
        id: 3,
        productName: "Product C",
        quantityInStock: 75,
        reorderLevel: 50,
        status: "good",
        unitCost: 45,
      },
      {
        id: 4,
        productName: "Product D",
        quantityInStock: 200,
        reorderLevel: 75,
        status: "optimal",
        unitCost: 60,
      },
    ],
  });
});

app.get("/api/inventory/alerts", (req, res) => {
  const inventoryAlerts = [
    {
      productName: "Product B",
      alert: "Low stock",
      quantity: 15,
      reorderLevel: 50,
    },
    {
      productName: "Product E",
      alert: "Out of stock",
      quantity: 0,
      reorderLevel: 30,
    },
  ];
  res.json({ status: "success", data: inventoryAlerts });
});

app.put("/api/inventory/:productId", (req, res) => {
  try {
    const { quantityInStock, reorderLevel } = req.body;
    res.json({
      status: "success",
      message: "Inventory updated",
      data: { productId: req.params.productId, quantityInStock, reorderLevel },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// ========== ALERTS ROUTES ==========
app.get("/api/alerts/active", (req, res) => {
  const activeAlerts = [
    {
      id: 1,
      type: "inventory",
      title: "Low Stock Alert",
      message: "Product B running low",
      severity: "high",
      icon: "🔴",
    },
    {
      id: 2,
      type: "sales",
      title: "High Performance",
      message: "Sales exceeding targets",
      severity: "info",
      icon: "🟢",
    },
    {
      id: 3,
      type: "financial",
      title: "Cost Alert",
      message: "Expenses trending higher",
      severity: "medium",
      icon: "🟡",
    },
  ];
  res.json({ status: "success", data: activeAlerts });
});

app.put("/api/alerts/:alertId/read", (req, res) => {
  res.json({ status: "success", message: "Alert marked as read" });
});

// ========== ANALYTICS & PREDICTIONS ==========
app.get("/api/analytics/dashboard", (req, res) => {
  res.json({
    status: "success",
    data: {
      salesTrend: "upward",
      costTrend: "upward",
      profitTrend: "stable",
      customerGrowth: 8.5,
      topProduct: "Product A",
    },
  });
});

app.get("/api/analytics/predictions", (req, res) => {
  res.json({
    status: "success",
    data: {
      nextWeekRevenue: 35000,
      expectedSales: 125,
      inventoryRecommendation: "Reorder Product B and C",
      predictedTopProduct: "Product A",
      riskFactors: ["Seasonal decline"],
      opportunities: ["Product expansion", "Customer retention"],
    },
  });
});

app.get("/api/analytics/ai-insights", (req, res) => {
  res.json({
    status: "success",
    data: [
      {
        type: "success",
        title: "Strong Performance",
        insight: "Revenue up 15%",
        recommendation: "Maintain strategy",
      },
      {
        type: "warning",
        title: "Cost Optimization",
        insight: "Expenses trending higher",
        recommendation: "Review costs",
      },
      {
        type: "opportunity",
        title: "Market Growth",
        insight: "Growing demand detected",
        recommendation: "Increase inventory",
      },
    ],
  });
});

app.get("/api/analytics/report", (req, res) => {
  res.json({
    status: "success",
    data: {
      generatedAt: new Date().toISOString(),
      summary: {
        totalRevenue: 125000,
        totalExpenses: 45000,
        netProfit: 80000,
        profitMargin: 64,
      },
    },
  });
});

// ========== ERROR HANDLING ==========
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    error:
      process.env.NODE_ENV === "development" ? err.message : "Unknown error",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   DECISION SUPPORT SYSTEM BACKEND      ║
╚════════════════════════════════════════╝

🚀 Server running on port ${PORT}
📊 Dashboard: http://localhost:${PORT}/api/dashboard
💓 Health check: http://localhost:${PORT}/api/health

Ready for connections...
  `);
});
