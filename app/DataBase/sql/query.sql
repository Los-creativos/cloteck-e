INSERT INTO "Customer" (name, last_name, email, phone_number, type_user)
VALUES
    ('John', 'Doe', 'john@example.com', 72253001, 'Admin'),
    ('Alice', 'Smith', 'alice@example.com', 98765432, 'User'),
    ('Bob', 'Johnson', 'bob@example.com', 12345678, 'User'),
    ('Eve', 'Williams', 'eve@example.com', 55512345, 'User'),
    ('Michael', 'Brown', 'michael@example.com', 33377999, 'Admin');

INSERT INTO "Product" (name, description, price, image, quantity)
VALUES
    ('Product 1', 'Description for Product 1', 50, 'image1.jpg', 100),
    ('Product 2', 'Description for Product 2', 75, 'image2.jpg', 150),
    ('Product 3', 'Description for Product 3', 30, NULL, 200),
    ('Product 4', 'Description for Product 4', 90, 'image4.jpg', 80),
    ('Product 5', 'Description for Product 5', 25, 'image5.jpg', 120);

INSERT INTO "Category" (name, description)
VALUES
    ('Category 1', 'Description for Category 1'),
    ('Category 2', 'Description for Category 2'),
    ('Category 3', 'Description for Category 3'),
    ('Category 4', 'Description for Category 4'),
    ('Category 5', 'Description for Category 5');

INSERT INTO "ProductCategory" (product_id, category_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

INSERT INTO "Size" (name)
VALUES
    ('Small'),
    ('Medium'),
    ('Large'),
    ('Extra Large'),
    ('XXL');

INSERT INTO "ProductSize" (product_id, size_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

INSERT INTO "Color" (name)
VALUES
    ('Red'),
    ('Green'),
    ('Blue'),
    ('Yellow'),
    ('Purple');

INSERT INTO "ProductColor" (product_id, color_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

INSERT INTO "Order" (product_id, user_id, product_quantity)
VALUES
    (1, 1, 2),
    (2, 2, 1),
    (3, 3, 3),
    (4, 4, 2),
    (5, 5, 1);

INSERT INTO "Shipment" (order_id, total_amount)
VALUES
    (1, 100),
    (2, 75),
    (3, 90),
    (4, 180),
    (5, 25);

INSERT INTO "Region" (name, taxes)
VALUES
    ('Region 1', 10),
    ('Region 2', 15),
    ('Region 3', 20),
    ('Region 4', 25),
    ('Region 5', 30);
