-- Real-Time Decision Support System Database Schema
-- PostgreSQL

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Businesses Table
CREATE TABLE IF NOT EXISTS businesses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financial Data Table
CREATE TABLE IF NOT EXISTS financial_data (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  revenue DECIMAL(15, 2),
  expenses DECIMAL(15, 2),
  profit DECIMAL(15, 2),
  cash_flow DECIMAL(15, 2),
  date_recorded DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sales Data Table
CREATE TABLE IF NOT EXISTS sales_data (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  product_name VARCHAR(255),
  quantity_sold INTEGER,
  unit_price DECIMAL(10, 2),
  total_amount DECIMAL(15, 2),
  customer_id VARCHAR(100),
  date_sold DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inventory Table
CREATE TABLE IF NOT EXISTS inventory (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  product_name VARCHAR(255) NOT NULL,
  quantity_in_stock INTEGER NOT NULL,
  reorder_level INTEGER,
  last_restocked DATE,
  unit_cost DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alerts Table
CREATE TABLE IF NOT EXISTS alerts (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  alert_type VARCHAR(50),
  title VARCHAR(255),
  message TEXT,
  severity VARCHAR(20),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytics Data Table
CREATE TABLE IF NOT EXISTS analytics (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  metric_name VARCHAR(100),
  metric_value DECIMAL(15, 4),
  date_recorded DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Predictions Table
CREATE TABLE IF NOT EXISTS predictions (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  prediction_type VARCHAR(100),
  predicted_value DECIMAL(15, 4),
  confidence_score DECIMAL(5, 2),
  prediction_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_businesses_user_id ON businesses(user_id);
CREATE INDEX IF NOT EXISTS idx_financial_data_business_id ON financial_data(business_id);
CREATE INDEX IF NOT EXISTS idx_sales_data_business_id ON sales_data(business_id);
CREATE INDEX IF NOT EXISTS idx_inventory_business_id ON inventory(business_id);
CREATE INDEX IF NOT EXISTS idx_alerts_business_id ON alerts(business_id);
CREATE INDEX IF NOT EXISTS idx_analytics_business_id ON analytics(business_id);
CREATE INDEX IF NOT EXISTS idx_predictions_business_id ON predictions(business_id);
