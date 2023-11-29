INSERT INTO "Customer" ("name", "last_name", "email", "phone_number", "type_user", "password")
VALUES
    ('John', 'Doe', 'john@example.com', 123456789, 'Admin', '$2a$10$eKdnOiDdO0dG.U4LPvCEAOZC6R8AvFy3YVibp4uorgiI4oq.ferjy'),
    ('Jane', 'Smith', 'jane@example.com', 987654321, 'Premium', 'password2'),
    ('Alice', 'Johnson', 'alice@example.com', NULL, 'Regular', 'password3'),
    ('Bob', 'Williams', 'bob@example.com', 555666777, 'Premium', 'password4'),
    ('Charlie', 'Brown', 'charlie@example.com', 111222333, 'Regular', 'password5');

INSERT INTO "Product" ("name", "description", "price")
VALUES
    ('Product 1', 'Description 1', 19.99),
    ('Product 2', 'Description 2', 29.92),
    ('Product 3', 'Description 3', 39.29),
    ('Product 4', 'Description 4', 49.49),
    ('Product 5', 'Description 5', 59.79);

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
    (5, 5, 5, 30, 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375');

INSERT INTO "Order" ("product_id", "user_id", "product_quantity", "date")
VALUES
    (1, 1, 2, CURRENT_TIMESTAMP),
    (2, 2, 1, CURRENT_TIMESTAMP),
    (3, 3, 3, CURRENT_TIMESTAMP),
    (4, 4, 2, CURRENT_TIMESTAMP),
    (5, 5, 1, CURRENT_TIMESTAMP);

INSERT INTO "Region" ("name", "taxes")
VALUES
    ('Region 1', 8),
    ('Region 2', 10),
    ('Region 3', 12),
    ('Region 4', 9),
    ('Region 5', 11);
