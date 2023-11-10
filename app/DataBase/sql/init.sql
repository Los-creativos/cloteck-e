SET TIME  ZONE 'UTC';

CREATE TABLE IF NOT EXISTS "Customer" (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number INTEGER,
    type_user VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS "Product" (
   product_id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   description VARCHAR(200) NOT NULL,
   price INT NOT NULL,
   image CHAR(100),
   quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Category" (
   category_id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   description VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS "ProductCategory" (
    product_category_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES "Product"(product_id),
    FOREIGN KEY (category_id) REFERENCES "Category"(category_id)
);

CREATE TABLE IF NOT EXISTS "Size" (
    size_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS "ProductSize" (
    product_size_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    size_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES "Product"(product_id),
    FOREIGN KEY (size_id) REFERENCES "Size"(size_id)
);


CREATE TABLE IF NOT EXISTS "Color" (
    color_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS "ProductColor" (
    product_color_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    color_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES "Product"(product_id),
    FOREIGN KEY (color_id) REFERENCES "Color"(color_id)
);

CREATE TABLE IF NOT EXISTS "Order" (
    order_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    product_quantity INT NOT NULL,
    date TIMESTAMPTZ(2) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES "Product"(product_id),
    FOREIGN KEY (user_id) REFERENCES "Customer"(customer_id)
);

CREATE TABLE IF NOT EXISTS "Shipment" (
    shipment_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    total_amount INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES "Order"(order_id)
);

CREATE TABLE IF NOT EXISTS "Region" (
    region_id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    taxes INT NOT NULL
);

