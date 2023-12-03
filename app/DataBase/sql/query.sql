INSERT INTO "Customer" ("name", "last_name", "email", "phone_number", "type_user", "password")
VALUES
    ('John', 'Doe', 'john@example.com', 123456789, 'Admin', '$2a$10$eKdnOiDdO0dG.U4LPvCEAOZC6R8AvFy3YVibp4uorgiI4oq.ferjy'),
    ('Jane', 'Smith', 'jane@example.com', 987654321, 'Regular', 'password2'),
    ('Alice', 'Johnson', 'alice@example.com', NULL, 'Regular', 'password3'),
    ('Bob', 'Williams', 'bob@example.com', 555666777, 'Regular', 'password4'),
    ('Charlie', 'Brown', 'charlie@example.com', 111222333, 'Regular', 'password5');

INSERT INTO "Product" ("name", "description", "price")
VALUES
    ('Product 1', 'Description 1', 19.99),
    ('Product 2', 'Description 2', 29.92),
    ('Product 3', 'Description 3', 39.29),
    ('Product 4', 'Description 4', 49.49),
    ('Product 5', 'Description 5', 59.79),
    ('A really Large Name of a product', 'A really Large Description of a the products Please not more', 59.79);

INSERT INTO "Category" ("name", "description")
VALUES
    ('Category 1', 'Category Description 1'),
    ('Category 2', 'Category Description 2'),
    ('Category 3', 'Category Description 3'),
    ('Category 4', 'Category Description 4'),
    ('Category 5', 'Category Description 5');

INSERT INTO "ProductCategory" ("product_id", "category_id")
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

INSERT INTO "Size" ("name")
VALUES
    ('S'),
    ('M'),
    ('L'),
    ('XL'),
    ('XXL');

INSERT INTO "Color" ("name")
VALUES
    ('#FF0000'),
    ('#00FF00'),
    ('#0000FF'),
    ('#FFFF00'),
    ('#FF00FF');

INSERT INTO "Attribute" ("product_id", "size_id", "color_id", "quantity", "image")
VALUES
    (1, 1, 1, 10, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (2, 2, 2, 15, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (3, 3, 3, 20, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410'),
    (4, 4, 4, 25, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919'),
    (5, 5, 5, 30, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (6, 5, 5, 30, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375');

INSERT INTO "Order" ("user_id", "date", "active")
VALUES
    (1, CURRENT_TIMESTAMP, '1'),
    (1, CURRENT_TIMESTAMP, '0'),
    (1, CURRENT_TIMESTAMP, '0'),
    (1, CURRENT_TIMESTAMP, '0'),
    (2, CURRENT_TIMESTAMP, '1'),
    (3, CURRENT_TIMESTAMP, '1'),
    (4, CURRENT_TIMESTAMP, '1'),
    (5, CURRENT_TIMESTAMP, '1'),
    (2, CURRENT_TIMESTAMP, '0'),
    (3, CURRENT_TIMESTAMP, '0'),
    (4, CURRENT_TIMESTAMP, '0'),
    (5, CURRENT_TIMESTAMP, '0'),
    (2, CURRENT_TIMESTAMP, '0'),
    (3, CURRENT_TIMESTAMP, '0'),
    (4, CURRENT_TIMESTAMP, '0'),
    (5, CURRENT_TIMESTAMP, '0');

INSERT INTO "OrderProduct" ("order_id", "product_id", "size_name", "color_name", "quantity", "image")
VALUES

    (1, 1, 'L', '#FF0000', 23, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (1, 1, 'S', '#00FF00', 24, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 1, 'M', '#00FF00', 25, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (1, 1, 'S', '#FF0000', 21, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919'),
    (1, 1, 'M', '#FF0000', 22, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 1, 'XL', '#00FF00', 26, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 3, 'XL', '#00FF00', 29, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 4, 'XL', '#00FF00', 30, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 1, 'XXl', '#FF1AAA', 27, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (1, 2, 'XL', '#00FF00', 28, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387'),
    (2, 4, 'L', '#0000FF', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (2, 4, 'M', '#0000FF', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (3, 2, 'XL', '#FFFF00', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (3, 4, 'XXL', '#FF00FF', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (3, 2, 'S', '#FF0000', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (3, 4, 'M', '#00FF00', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375'),
    (1, 6, 'L', '#0000FF', 5, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375');

INSERT INTO "Region" ("name", "taxes")
VALUES
    ('Region 1', 8),
    ('Region 2', 10),
    ('Region 3', 12),
    ('Region 4', 9),
    ('Region 5', 11);