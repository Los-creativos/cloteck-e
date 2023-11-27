CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL UNIQUE,
    "phone_number" INTEGER,
    "type_user" VARCHAR(50) NOT NULL,
    "password" VARCHAR(300) NOT NULL,

CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" NUMERIC(10,2) NOT NULL,

CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

CREATE TABLE "Category" (
"category_id" SERIAL NOT NULL,
"name" VARCHAR(50) NOT NULL,
"description" VARCHAR(200) NOT NULL,

CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

CREATE TABLE "ProductCategory" (
"product_category_id" SERIAL NOT NULL,
"product_id" INTEGER NOT NULL,
"category_id" INTEGER NOT NULL,

CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("product_category_id")
);

CREATE TABLE "Size" (
"size_id" SERIAL NOT NULL,
"name" VARCHAR(50) NOT NULL,

CONSTRAINT "Size_pkey" PRIMARY KEY ("size_id")
);

CREATE TABLE "Color" (
"color_id" SERIAL NOT NULL,
"name" VARCHAR(50) NOT NULL,

CONSTRAINT "Color_pkey" PRIMARY KEY ("color_id")
);

CREATE TABLE "Attribute" (
    "attribute_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "size_id" INTEGER NOT NULL,
    "color_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "image" CHAR(300) NOT NULL,

CONSTRAINT "Attribute_pkey" PRIMARY KEY ("attribute_id")
);

CREATE TABLE "Order" (
     "order_id" SERIAL NOT NULL,
     "product_id" INTEGER NOT NULL,
     "user_id" INTEGER NOT NULL,
     "product_quantity" INTEGER NOT NULL,
     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

     CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

CREATE TABLE "Region" (
"region_id" SERIAL NOT NULL,
"name" VARCHAR(50) NOT NULL,
"taxes" INTEGER NOT NULL,

CONSTRAINT "Region_pkey" PRIMARY KEY ("region_id")
);
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("size_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("color_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
