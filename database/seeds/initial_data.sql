-- Initial seed data for Decision Support System

-- Insert test user
INSERT INTO users (email, password_hash, first_name, last_name, company_name, role)
VALUES ('admin@test.com', '$2a$10$...', 'Admin', 'User', 'Test Business', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert test business
INSERT INTO businesses (user_id, business_name, industry, description)
SELECT id, 'Test Business', 'Retail', 'A test business for demonstration'
FROM users WHERE email = 'admin@test.com'
ON CONFLICT DO NOTHING;

-- Insert sample financial data
INSERT INTO financial_data (business_id, revenue, expenses, profit, cash_flow, date_recorded)
SELECT id, 50000, 20000, 30000, 15000, CURRENT_DATE
FROM businesses WHERE business_name = 'Test Business'
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO inventory (business_id, product_name, quantity_in_stock, reorder_level, unit_cost)
SELECT id, 'Product A', 150, 50, 25
FROM businesses WHERE business_name = 'Test Business'
ON CONFLICT DO NOTHING;

INSERT INTO inventory (business_id, product_name, quantity_in_stock, reorder_level, unit_cost)
SELECT id, 'Product B', 75, 50, 35
FROM businesses WHERE business_name = 'Test Business'
ON CONFLICT DO NOTHING;

INSERT INTO inventory (business_id, product_name, quantity_in_stock, reorder_level, unit_cost)
SELECT id, 'Product C', 30, 50, 45
FROM businesses WHERE business_name = 'Test Business'
ON CONFLICT DO NOTHING;
