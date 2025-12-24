require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

// Import Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

// Import Routes
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const SESSION_SECRET = process.env.SESSION_SECRET || 'zerodha-clone-secret-key-2024';

const app = express();

// ============================================
// Middleware Configuration
// ============================================

// Enhanced CORS configuration for development and production
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://frontend-lovat-five-16.vercel.app',
    'https://dashboard-woad-delta-86.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ============================================
// Authentication Routes
// ============================================
app.use('/auth', authRoutes);

// ============================================
// Health Check Route
// ============================================
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Zerodha Clone API is running!",
    version: "2.0.0",
    endpoints: {
      auth: {
        register: "POST /auth/register",
        login: "POST /auth/login",
        logout: "POST /auth/logout",
        user: "GET /auth/user"
      },
      data: {
        holdings: "GET /allHoldings",
        positions: "GET /allPositions",
        orders: "GET /allOrders"
      },
      trading: {
        newOrder: "POST /newOrder"
      }
    }
  });
});

// ============================================
// Middleware: Check Authentication
// ============================================
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // For development, allow unauthenticated access
  if (process.env.NODE_ENV !== 'production') {
    return next();
  }
  res.status(401).json({
    status: 'error',
    message: 'Authentication required'
  });
};

// ============================================
// Market Data Route (Simulated)
// ============================================
app.get("/market-data", (req, res) => {
  // Simulate market data with some randomness
  const baseNifty = 19523.55;
  const baseSensex = 65205.12;
  const niftyChange = (Math.random() - 0.5) * 100;
  const sensexChange = (Math.random() - 0.5) * 300;

  res.json({
    status: "success",
    timestamp: new Date().toISOString(),
    indices: {
      nifty: {
        name: "NIFTY 50",
        value: (baseNifty + niftyChange).toFixed(2),
        change: niftyChange.toFixed(2),
        changePercent: ((niftyChange / baseNifty) * 100).toFixed(2)
      },
      sensex: {
        name: "SENSEX",
        value: (baseSensex + sensexChange).toFixed(2),
        change: sensexChange.toFixed(2),
        changePercent: ((sensexChange / baseSensex) * 100).toFixed(2)
      }
    },
    marketStatus: isMarketOpen() ? "open" : "closed"
  });
});

// Helper function to check if market is open
function isMarketOpen() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDay();

  // Market is closed on weekends
  if (day === 0 || day === 6) return false;

  // Market hours: 9:15 AM to 3:30 PM IST
  const marketOpen = 9 * 60 + 15;
  const marketClose = 15 * 60 + 30;
  const currentTime = hours * 60 + minutes;

  return currentTime >= marketOpen && currentTime <= marketClose;
}

// ============================================
// Seed Data Route for Holdings
// ============================================
app.get("/addHoldings", async (req, res) => {
  try {
    await HoldingsModel.deleteMany({});

    const tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
      { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%", isLoss: true },
      { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%", isLoss: true },
      { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
      { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];

    await HoldingsModel.insertMany(tempHoldings);

    res.json({
      status: "success",
      message: `Successfully added ${tempHoldings.length} holdings!`,
      data: tempHoldings
    });
  } catch (error) {
    console.error("Error adding holdings:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to add holdings",
      error: error.message
    });
  }
});

// ============================================
// Seed Data Route for Positions
// ============================================
app.get("/addPositions", async (req, res) => {
  try {
    await PositionsModel.deleteMany({});

    const tempPositions = [
      { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
      { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
      { product: "MIS", name: "TATAMOTORS", qty: 10, avg: 450.5, price: 465.2, net: "+3.26%", day: "+1.85%", isLoss: false },
      { product: "MIS", name: "ICICIBANK", qty: 5, avg: 920.0, price: 935.5, net: "+1.68%", day: "+0.55%", isLoss: false },
    ];

    await PositionsModel.insertMany(tempPositions);

    res.json({
      status: "success",
      message: `Successfully added ${tempPositions.length} positions!`,
      data: tempPositions
    });
  } catch (error) {
    console.error("Error adding positions:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to add positions",
      error: error.message
    });
  }
});

// ============================================
// Get All Holdings
// ============================================
app.get("/allHoldings", isAuthenticated, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch holdings",
      error: error.message
    });
  }
});

// ============================================
// Get All Positions
// ============================================
app.get("/allPositions", isAuthenticated, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch positions",
      error: error.message
    });
  }
});

// ============================================
// Get All Orders
// ============================================
app.get("/allOrders", isAuthenticated, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch orders",
      error: error.message
    });
  }
});

// ============================================
// Create New Order
// ============================================
app.post("/newOrder", isAuthenticated, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields: name, qty, price, mode"
      });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode: mode.toUpperCase(),
      createdAt: new Date()
    });

    await newOrder.save();

    res.json({
      status: "success",
      message: "Order saved successfully!",
      data: newOrder
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to create order",
      error: error.message
    });
  }
});

// ============================================
// Delete Order
// ============================================
app.delete("/deleteOrder/:id", isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    await OrdersModel.findByIdAndDelete(id);

    res.json({
      status: "success",
      message: "Order deleted successfully!"
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete order",
      error: error.message
    });
  }
});

// ============================================
// Get Stock Quote (Simulated)
// ============================================
app.get("/quote/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    // Simulated stock data
    const stocks = {
      'INFY': { name: 'Infosys Ltd', price: 1555.45, change: -25.30 },
      'TCS': { name: 'Tata Consultancy Services', price: 3194.80, change: 15.20 },
      'RELIANCE': { name: 'Reliance Industries', price: 2112.40, change: 30.10 },
      'HDFCBANK': { name: 'HDFC Bank Ltd', price: 1522.35, change: 1.70 },
      'WIPRO': { name: 'Wipro Ltd', price: 577.75, change: 1.85 },
      'SBIN': { name: 'State Bank of India', price: 430.20, change: -1.45 },
      'ITC': { name: 'ITC Ltd', price: 207.90, change: 1.65 },
      'BHARTIARTL': { name: 'Bharti Airtel', price: 541.15, change: 16.15 }
    };

    const stock = stocks[symbol.toUpperCase()];

    if (!stock) {
      return res.status(404).json({
        status: 'error',
        message: 'Stock not found'
      });
    }

    res.json({
      status: 'success',
      symbol: symbol.toUpperCase(),
      ...stock,
      changePercent: ((stock.change / stock.price) * 100).toFixed(2),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch quote'
    });
  }
});

// ============================================
// Database Connection and Server Start
// ============================================
mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 API endpoints available:`);
      console.log(`   Auth:`);
      console.log(`   - POST /auth/register`);
      console.log(`   - POST /auth/login`);
      console.log(`   - POST /auth/logout`);
      console.log(`   - GET  /auth/user`);
      console.log(`   Data:`);
      console.log(`   - GET  /allHoldings`);
      console.log(`   - GET  /allPositions`);
      console.log(`   - GET  /allOrders`);
      console.log(`   - GET  /market-data`);
      console.log(`   Trading:`);
      console.log(`   - POST /newOrder`);
      console.log(`   - DELETE /deleteOrder/:id`);
      console.log(`   Seed:`);
      console.log(`   - GET  /addHoldings`);
      console.log(`   - GET  /addPositions`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  });