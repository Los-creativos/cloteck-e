-- Inserting into Customer table
INSERT INTO "Customer" ("name", "last_name", "email", "phone_number", "type_user")
VALUES
  ('John', 'Doe', 'john.doe@example.com', 123456789, 'Regular'),
  ('Alice', 'Smith', 'alice.smith@example.com', 987654321, 'Premium'),
  ('Bob', 'Johnson', 'bob.johnson@example.com', NULL, 'Regular'),
  ('Eva', 'Williams', 'eva.williams@example.com', 555555555, 'Premium'),
  ('Charlie', 'Brown', 'charlie.brown@example.com', 111111111, 'Regular');

-- Inserting into Product table
INSERT INTO "Product" ("name", "description", "price", "image")
VALUES
  ('Product A', 'Description for Product A', 19.99, 'productA.jpg'),
  ('Product B', 'Description for Product B', 29.99, 'productB.jpg'),
  ('Product C', 'Description for Product C', 39.99, 'productC.jpg'),
  ('Product D', 'Description for Product D', 49.99, 'productD.jpg'),
  ('Product E', 'Description for Product E', 59.99, 'productE.jpg');

-- Inserting into Category table
INSERT INTO "Category" ("name", "description")
VALUES
  ('Electronics', 'Electronic devices and accessories'),
  ('Clothing', 'Fashion and apparel'),
  ('Home', 'Home and living essentials'),
  ('Books', 'Books and literature'),
  ('Sports', 'Sports and outdoor equipment');

-- Inserting into ProductCategory table
INSERT INTO "ProductCategory" ("product_id", "category_id")
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5);

-- Inserting into Size table
INSERT INTO "Size" ("name")
VALUES
  ('Small'),
  ('Medium'),
  ('Large'),
  ('XL'),
  ('XXL');

-- Inserting into Color table
INSERT INTO "Color" ("name")
VALUES
  ('Red'),
  ('Blue'),
  ('Green'),
  ('Yellow'),
  ('Black');

-- Inserting into Attribute table
INSERT INTO "Attribute" ("product_id", "size_id", "color_id", "quantity")
VALUES
  (1, 1, 1, 10),
  (2, 2, 2, 15),
  (3, 3, 3, 20),
  (4, 4, 4, 25),
  (5, 5, 5, 30);

-- Inserting into Order table
INSERT INTO "Order" ("product_id", "user_id", "product_quantity")
VALUES
  (1, 1, 2),
  (2, 2, 1),
  (3, 3, 3),
  (4, 4, 4),
  (5, 5, 5);
