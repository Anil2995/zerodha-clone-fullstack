# 🚀 Zerodha Clone - Full-Stack Stock Trading Platform

<div align="center">
  <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha Logo" width="200"/>
  
  **A comprehensive clone of India's largest stock broker - [Zerodha](https://zerodha.com/)**

  ### 🚀 [**View Live Demo**](https://frontend-lovat-five-16.vercel.app) 🚀

  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
</div>

---

## 📋 Table of Contents

| Section | Description |
|---------|-------------|
| [🌟 Overview](#-overview) | Project introduction and architecture |
| [✨ Features](#-features) | Complete feature list |
| [🛠️ Tech Stack](#️-tech-stack) | Technologies used |
| [📁 Project Structure](#-project-structure) | Folder organization |
| [📦 Installation](#-installation) | Step-by-step setup guide |
| [🚀 Running the App](#-running-the-application) | How to start the application |
| [📡 API Documentation](#-api-documentation) | All API endpoints |
| [🔐 Authentication](#-authentication-flow) | Login/Register flow |
| [🌐 Deployment](#-deployment-guide) | Deploy to production |
| [🔑 Environment Variables](#-environment-variables) | Configuration options |

---

## 🌟 Overview

### What is this project?

This is a **production-ready clone** of Zerodha - India's largest discount stock broker. It's a complete  full-stack application demonstrating:

- ✅ Modern React 19 frontend development
- ✅ RESTful API design with Express.js
- ✅ MongoDB database integration
- ✅ User authentication with Passport.js
- ✅ Real-time market data simulation
- ✅ Responsive, mobile-friendly UI

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ZERODHA CLONE                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌───────────────┐    ┌───────────────┐    ┌──────────────────┐    │
│  │   FRONTEND    │    │   DASHBOARD   │    │     BACKEND      │    │
│  │   (React)     │    │   (React)     │    │   (Express.js)   │    │
│  │               │    │               │    │                  │    │
│  │  Port: 3000   │    │  Port: 3001   │    │    Port: 3002    │    │
│  │               │    │               │    │                  │    │
│  │  • Landing    │    │  • Kite Login │    │  • Auth API      │    │
│  │  • Signup     │    │  • Holdings   │    │  • Data API      │    │
│  │  • Login      │    │  • Positions  │    │  • Trading API   │    │
│  │  • Products   │    │  • Orders     │    │  • Market Data   │    │
│  │  • Pricing    │    │  • Funds      │    │                  │    │
│  │  • About      │    │  • Apps       │    │                  │    │
│  │  • Support    │    │  • Watchlist  │    │                  │    │
│  └───────┬───────┘    └───────┬───────┘    └────────┬─────────┘    │
│          │                    │                      │              │
│          └────────────────────┼──────────────────────┘              │
│                               │                                      │
│                               ▼                                      │
│                     ┌──────────────────┐                            │
│                     │     MongoDB      │                            │
│                     │     Atlas        │                            │
│                     │                  │                            │
│                     │  • Users         │                            │
│                     │  • Holdings      │                            │
│                     │  • Positions     │                            │
│                     │  • Orders        │                            │
│                     └──────────────────┘                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Quick Start Summary

| Step | Command | Port |
|------|---------|------|
| 1️⃣ Start Backend | `cd Backend && npm start` | 3002 |
| 2️⃣ Start Frontend | `cd frontend && npm start` | 3000 |
| 3️⃣ Start Dashboard | `cd dashboard && npm start` | 3001 |

---

## ✨ Features

### 🔐 Authentication System

| Feature | Description |
|---------|-------------|
| **User Registration** | Sign up with email, full name, phone, and password |
| **Secure Login** | Session-based authentication with encrypted passwords |
| **Password Hashing** | PBKDF2 encryption via passport-local-mongoose |
| **Auto Login** | Automatic login after successful registration |
| **Kite Login** | Dedicated login page for dashboard access |
| **Logout** | Secure session termination with localStorage cleanup |

### 🏠 Landing Website (Port 3000)

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, awards, stats, pricing preview, education |
| **About** | `/about` | Company story, leadership team, mission & values |
| **Products** | `/product` | Kite, Console, Coin, Varsity, Kite Connect |
| **Pricing** | `/pricing` | Detailed brokerage charges and fee structure |
| **Support** | `/support` | FAQ, support topics, contact information |
| **Signup** | `/signup` | Registration form with validation |
| **Login** | `/login` | User authentication form |
| **404** | `/*` | Custom not found page |

### 📊 Trading Dashboard (Port 3001)

| Feature | Description |
|---------|-------------|
| **🔑 Kite Login** | Secure login page for direct dashboard access |
| **📈 Market Data** | Live NIFTY 50 & SENSEX with auto-refresh (10 seconds) |
| **⏰ Live Clock** | Real-time clock with market status indicator |
| **📋 Watchlist** | Track favorite stocks with buy/sell buttons |
| **💼 Holdings** | View long-term investments with P&L |
| **📊 Positions** | Monitor intraday positions |
| **📝 Orders** | Order history with delete functionality |
| **💰 Funds** | Balance overview with add/withdraw options |
| **📱 Apps** | Zerodha product ecosystem with logos |
| **👤 Profile** | User info with logout option |

### 🔧 Backend API (Port 3002)

| Category | Feature |
|----------|---------|
| **Authentication** | Register, Login, Logout, Get User |
| **Data** | Holdings, Positions, Orders, Market Data |
| **Trading** | Create Order, Delete Order, Stock Quote |
| **Admin** | Seed Holdings, Seed Positions |
| **Security** | CORS, Session Management, Password Hashing |

---

## 🛠️ Tech Stack

### Complete Technology Table

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Frontend** | React | 19 | UI library |
| | React Router | v7 | Client-side routing |
| | Axios | latest | HTTP client |
| | Bootstrap | 5 | CSS framework |
| **Dashboard** | React | 19 | UI library |
| | Material UI | latest | Component library |
| | Chart.js | latest | Data visualization |
| | Axios | latest | HTTP client |
| **Backend** | Node.js | 18+ | Runtime environment |
| | Express.js | 5 | Web framework |
| | Mongoose | 9 | MongoDB ODM |
| | Passport.js | latest | Authentication |
| | express-session | latest | Session management |
| **Database** | MongoDB | Atlas | Cloud database |
| **Tools** | nodemon | latest | Auto-restart server |
| | dotenv | latest | Environment variables |
| | cors | latest | Cross-origin support |

---

## 📁 Project Structure

```
ZERODHA_CLONE/
│
├── 📂 Backend/                      # ─────────── Express.js API Server
│   ├── 📂 config/
│   │   └── 📄 passport.js           # Passport authentication config
│   │
│   ├── 📂 model/
│   │   ├── 📄 HoldingsModel.js      # Holdings data model
│   │   ├── 📄 PositionsModel.js     # Positions data model
│   │   ├── 📄 OrdersModel.js        # Orders data model
│   │   └── 📄 UserModel.js          # User authentication model
│   │
│   ├── 📂 routes/
│   │   └── 📄 authRoutes.js         # Authentication endpoints
│   │
│   ├── 📂 schemas/
│   │   ├── 📄 HoldingsSchema.js     # Holdings schema definition
│   │   ├── 📄 PositionsSchema.js    # Positions schema definition
│   │   └── 📄 OrdersSchema.js       # Orders schema definition
│   │
│   ├── 📄 index.js                  # Main server entry point
│   ├── 📄 package.json              # Dependencies
│   ├── 📄 .env                      # Environment variables (git-ignored)
│   └── 📄 .env.example              # Environment template
│
├── 📂 frontend/                     # ─────────── Landing Website (React)
│   ├── 📂 public/
│   │   ├── 📂 media/images/         # Static images and assets
│   │   └── 📄 index.html            # HTML template
│   │
│   ├── 📂 src/
│   │   ├── 📂 landing_page/
│   │   │   ├── 📂 home/             # Home page components
│   │   │   ├── 📂 about/            # About page components
│   │   │   ├── 📂 products/         # Products page components
│   │   │   ├── 📂 pricing/          # Pricing page components
│   │   │   ├── 📂 support/          # Support page components
│   │   │   ├── 📂 signup/           # Signup page with form
│   │   │   ├── 📂 login/            # Login page with form
│   │   │   ├── 📄 Navbar.js         # Navigation bar
│   │   │   ├── 📄 Footer.js         # Footer component
│   │   │   ├── 📄 OpenAccount.js    # CTA component
│   │   │   └── 📄 NotFound.js       # 404 page
│   │   │
│   │   ├── 📄 index.js              # React entry point
│   │   └── 📄 index.css             # Global styles (800+ lines)
│   │
│   ├── 📄 package.json
│   ├── 📄 .env                      # API URL config
│   └── 📄 vercel.json               # Vercel deployment config
│
├── 📂 dashboard/                    # ─────────── Trading Dashboard (React)
│   ├── 📂 public/
│   │   └── 📄 index.html            # HTML template
│   │
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📄 Home.js           # Main wrapper + auth check
│   │   │   ├── 📄 KiteLogin.js      # Dashboard login page
│   │   │   ├── 📄 KiteLogin.css     # Login page styles
│   │   │   ├── 📄 TopBar.js         # Market indices + Menu
│   │   │   ├── 📄 Menu.js           # Navigation + Profile
│   │   │   ├── 📄 Dashboard.js      # Main dashboard layout
│   │   │   ├── 📄 Summary.js        # Account summary + stats
│   │   │   ├── 📄 Holdings.js       # Holdings table
│   │   │   ├── 📄 Positions.js      # Positions table
│   │   │   ├── 📄 Orders.js         # Order history
│   │   │   ├── 📄 Funds.js          # Fund management
│   │   │   ├── 📄 Apps.js           # Zerodha apps + logos
│   │   │   ├── 📄 Apps.css          # Apps page styles
│   │   │   ├── 📄 WatchList.js      # Stock watchlist
│   │   │   └── 📄 BuyActionWindow.js # Buy/Sell modal
│   │   │
│   │   ├── 📂 data/
│   │   │   └── 📄 data.js           # Mock watchlist data
│   │   │
│   │   ├── 📄 index.js              # React entry point
│   │   └── 📄 index.css             # Dashboard styles (1300+ lines)
│   │
│   ├── 📄 package.json
│   ├── 📄 .env                      # API URL config
│   └── 📄 vercel.json               # Vercel deployment config
│
├── 📄 .gitignore                    # Git ignore rules
├── 📄 render.yaml                   # Render deployment blueprint
└── 📄 README.md                     # This documentation file
```

---

## 📦 Installation

### Prerequisites

| Requirement | Version | Download |
|-------------|---------|----------|
| **Node.js** | 18+ | [nodejs.org](https://nodejs.org/) |
| **npm** | 9+ | Comes with Node.js |
| **MongoDB Atlas** | Free tier | [mongodb.com](https://www.mongodb.com/cloud/atlas) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### Step-by-Step Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/zerodha-clone.git
cd zerodha-clone
```

#### Step 2: Set Up MongoDB Atlas

| Step | Action |
|------|--------|
| 1 | Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |
| 2 | Create a **free cluster** (M0 Sandbox) |
| 3 | Create a **database user** with password |
| 4 | Get your **connection string** |
| 5 | **Whitelist IP** (use `0.0.0.0/0` for development) |

Your connection string will look like:
```
mongodb+srv://username:password@cluster.mongodb.net/zerodha
```

#### Step 3: Configure Environment Variables

**Backend (.env):**
```bash
cd Backend
cp .env.example .env
```

Edit the `.env` file:
```env
# MongoDB Connection (REQUIRED)
MONGO_URL=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/zerodha

# Server Configuration
PORT=3002

# Session Secret (REQUIRED - use a long random string)
SESSION_SECRET=your-super-secret-key-minimum-32-characters-long

# Environment
NODE_ENV=development
```

**Frontend (.env):**
```bash
cd frontend
echo "REACT_APP_API_URL=http://localhost:3002" > .env
```

**Dashboard (.env):**
```bash
cd dashboard
echo "REACT_APP_API_URL=http://localhost:3002" > .env
```

#### Step 4: Install Dependencies

| Terminal | Commands |
|----------|----------|
| Terminal 1 | `cd Backend && npm install` |
| Terminal 2 | `cd frontend && npm install` |
| Terminal 3 | `cd dashboard && npm install` |

---

## 🚀 Running the Application

### Start All Services

Open **three separate terminals** and run:

| Terminal | Service | Command | Expected Output |
|----------|---------|---------|-----------------|
| 1️⃣ | Backend | `cd Backend && npm start` | ✅ MongoDB connected! 🚀 Server on 3002 |
| 2️⃣ | Frontend | `cd frontend && npm start` | Compiled successfully! |
| 3️⃣ | Dashboard | `cd dashboard && npm start` | Compiled successfully! |

### Seed Sample Data

After starting the backend, open your browser:

| URL | Purpose | Expected Result |
|-----|---------|-----------------|
| http://localhost:3002/addHoldings | Add 13 sample holdings | `{"status": "success"}` |
| http://localhost:3002/addPositions | Add 4 sample positions | `{"status": "success"}` |

### Access URLs

| Application | URL | Description |
|-------------|-----|-------------|
| 🏠 **Landing Page** | http://localhost:3000 | Main website |
| 📝 **Signup** | http://localhost:3000/signup | Create account |
| 🔑 **Login** | http://localhost:3000/login | Login to account |
| 📊 **Dashboard** | http://localhost:3001 | Trading dashboard |
| 🔧 **API** | http://localhost:3002 | Backend API |

---

## 📡 API Documentation

### Base URL
```
http://localhost:3002
```

### Authentication Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/auth/register` | Register new user | `{ fullName, email, phone, password }` |
| `POST` | `/auth/login` | Login user | `{ email, password }` |
| `POST` | `/auth/logout` | Logout user | None |
| `GET` | `/auth/user` | Get current user | None |
| `GET` | `/auth/check-email/:email` | Check if email exists | None |

#### Register Request Example
```json
POST /auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "SecurePassword123"
}
```

#### Register Response Example
```json
{
  "status": "success",
  "message": "Registration successful!",
  "user": {
    "id": "64a1b2c3d4e5f6g7h8i9j0",
    "email": "john@example.com",
    "fullName": "John Doe",
    "phone": "9876543210",
    "balance": 100000
  }
}
```

### Data Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | API health check | ❌ |
| `GET` | `/market-data` | Get NIFTY/SENSEX data | ❌ |
| `GET` | `/allHoldings` | Get all holdings | ✅ |
| `GET` | `/allPositions` | Get all positions | ✅ |
| `GET` | `/allOrders` | Get all orders | ✅ |
| `GET` | `/quote/:symbol` | Get stock quote | ❌ |

### Trading Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/newOrder` | Create new order | `{ name, qty, price, mode }` |
| `DELETE` | `/deleteOrder/:id` | Delete an order | None |

### Seed Data Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/addHoldings` | Seed 13 sample holdings |
| `GET` | `/addPositions` | Seed 4 sample positions |

---

## 🔐 Authentication Flow

### Registration Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    REGISTRATION FLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  User fills signup form (frontend/signup)                       │
│            │                                                    │
│            ▼                                                    │
│  Frontend validates input                                       │
│            │                                                    │
│            ▼                                                    │
│  POST /auth/register ────────────────────► Backend              │
│            │                                                    │
│            ▼                                                    │
│  Backend validates & hashes password                            │
│            │                                                    │
│            ▼                                                    │
│  User saved to MongoDB                                          │
│            │                                                    │
│            ▼                                                    │
│  Session created (auto-login)                                   │
│            │                                                    │
│            ▼                                                    │
│  User data returned ◄──────────────────── Backend               │
│            │                                                    │
│            ▼                                                    │
│  Save to localStorage                                           │
│            │                                                    │
│            ▼                                                    │
│  Redirect to Dashboard (localhost:3001)                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Kite Dashboard Login Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                 KITE DASHBOARD LOGIN FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  User visits localhost:3001 (Dashboard)                         │
│            │                                                    │
│            ▼                                                    │
│  Home.js checks localStorage for 'zerodhaUser'                  │
│            │                                                    │
│            ├──── USER FOUND ───────► Show Dashboard             │
│            │                                                    │
│            └──── NOT FOUND ────────► Show KiteLogin.js          │
│                        │                                        │
│                        ▼                                        │
│            User enters email + password                         │
│                        │                                        │
│                        ▼                                        │
│            POST /auth/login ────────────► Backend               │
│                        │                                        │
│                        ▼                                        │
│            Passport.js authenticates                            │
│                        │                                        │
│                        ├──── INVALID ──► Show error message     │
│                        │                                        │
│                        └──── VALID ────► Return user data       │
│                                    │                            │
│                                    ▼                            │
│                        Save to localStorage                     │
│                                    │                            │
│                                    ▼                            │
│                        Show Dashboard components                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Session Management

| Aspect | Details |
|--------|---------|
| **Storage** | Server-side sessions with express-session |
| **Cookie** | HTTP-only for security |
| **Expiry** | 24 hours |
| **Client Storage** | localStorage for user display data |

---

## 🌐 Deployment Guide

### Option 1: Render (Recommended)

#### Using render.yaml (Automatic)

| Step | Action |
|------|--------|
| 1 | Push code to GitHub |
| 2 | Go to [Render Dashboard](https://dashboard.render.com) |
| 3 | Click **New** → **Blueprint** |
| 4 | Connect GitHub repository |
| 5 | Render detects `render.yaml` |
| 6 | Set `MONGO_URL` in dashboard |
| 7 | Deploy! |

#### Manual Deployment

**Backend (Web Service):**
| Setting | Value |
|---------|-------|
| Root Directory | `Backend` |
| Build Command | `npm install` |
| Start Command | `node index.js` |

**Frontend/Dashboard (Static Site):**
| Setting | Value |
|---------|-------|
| Root Directory | `frontend` or `dashboard` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `build` |

### Option 2: Vercel + Render

| Service | Platform | Type |
|---------|----------|------|
| Backend | Render | Web Service |
| Frontend | Vercel | Static Site |
| Dashboard | Vercel | Static Site |

### Post-Deployment Checklist

- [ ] Update CORS origins in `Backend/index.js`
- [ ] Update `REACT_APP_API_URL` in frontend and dashboard
- [ ] Seed database with Holdings and Positions
- [ ] Test registration and login flows
- [ ] Verify market data is loading

---

## 🔑 Environment Variables

### Backend Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `MONGO_URL` | ✅ | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/zerodha` |
| `PORT` | ❌ | Server port (default: 3002) | `3002` |
| `SESSION_SECRET` | ✅ | Session encryption key | `your-super-secret-key-32-chars` |
| `NODE_ENV` | ❌ | Environment mode | `development` or `production` |

### Frontend & Dashboard Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `REACT_APP_API_URL` | ✅ | Backend API URL | `http://localhost:3002` |

---

## 📱 Apps Page

The dashboard includes a comprehensive Apps page featuring Zerodha's product ecosystem:

### Zerodha Products

| App | Description | Features |
|-----|-------------|----------|
| 🚀 **Kite** | Flagship trading platform | Streaming data, Advanced charts, GTT orders |
| 📊 **Console** | Account management | Fund management, Tax reports, Portfolio analysis |
| 💰 **Coin** | Direct mutual funds | Zero commission, SIP, Goal tracking |
| 🔌 **Kite Connect** | Trading APIs | REST APIs, WebSocket, SDK |
| 📚 **Varsity** | Stock market education | Free content, 12+ modules, Certifications |
| 🔔 **Sentinel** | Price alerts | Custom conditions, Email & SMS notifications |

### Partner Apps

| App | Category | Description |
|-----|----------|-------------|
| Smallcase | Investments | Curated stock portfolios |
| Streak | Algo Trading | No-code trading strategies |
| Sensibull | Options | Options trading made simple |
| Golden Pi | Bonds | Buy and sell bonds online |

---

## 🤝 Contributing

### How to Contribute

| Step | Action |
|------|--------|
| 1 | **Fork** the repository |
| 2 | **Clone** your fork |
| 3 | **Create** a feature branch |
| 4 | **Make** your changes |
| 5 | **Test** thoroughly |
| 6 | **Commit** with clear message |
| 7 | **Push** to your fork |
| 8 | **Open** a Pull Request |

### Code Style Guidelines

- ✅ Use meaningful variable names
- ✅ Add comments for complex logic
- ✅ Follow existing code patterns
- ✅ Test changes before submitting
- ✅ Keep PRs focused and small

---

## ⚠️ Disclaimer

> **⚠️ EDUCATIONAL PROJECT ONLY**
> 
> This application is a clone created for **learning purposes**. It is **NOT** affiliated with Zerodha Broking Ltd. in any way. All trademarks, logos, and brand names are the property of their respective owners.
> 
> **🚫 DO NOT use this application for real trading or invest real money.**

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

<div align="center">
  <img src="frontend/public/media/images/founder.jpg" alt="Siddem Anil Kumar" width="150" style="border-radius: 50%"/>
  
  **Siddem Anil Kumar**
  
  *Founder & Full-Stack Developer*
</div>

| Platform | Link |
|----------|------|
| 🐙 **GitHub** | [@Anil2995](https://github.com/Anil2995) |
| 📸 **Instagram** | [@anil09_29](https://www.instagram.com/anil09_29/) |
| 📧 **Email** | [siddemanilkumar@gmail.com](mailto:siddemanilkumar@gmail.com) |

---

<div align="center">
  
  Made with ❤️ by **Siddem Anil Kumar**
  
  🚀 *Building impactful technology is my driving force!* 🚀
  
  ⭐ **Star this repository if you found it helpful!** ⭐
  
</div>
