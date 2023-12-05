import { createProductSchema, filterQuery, updateProductSchema } from "@/app/(backend)/api/products/product.schema";

it('should validate a valid input for createProductSchema', () => {
  const validInput = {
    name: 'Product Name',
    description: 'Product Description 1',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(validInput);

  expect(result.success).toBe(true);
});

it('should validate a valid input for updateProductSchema', () => {
  const validInput = {
    description: 'Updated Product Description',
    ProductCategory: [
      {
        category_id: 2
      }
    ]
  };

  const result = updateProductSchema.safeParse(validInput);

  expect(result.success).toBe(true);
});

it('should validate a valid input for filterQuery', () => {
  const validInput = {
    limit: 5,
    page: 2
  };

  const result = filterQuery.safeParse(validInput);

  expect(result.success).toBe(true);
});

it('should throw an error when the product name has length greater than 50', () => {
  const invalidInput = {
    name: 'Product Name with a very long length that exceeds the maximum limit of 50 characters',
    description: 'Product Description',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('Maximum characters are 50');
});

it('should throw an error when the product description has length less than 20', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('Minium of 20 characters required');
});

it('should throw an error when the product description has length greater than 200', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description with a very long length that exceeds the maximum limit of 200 characters Product Description with a very long length that exceeds the maximum limit of 200 characters Product Description with a very long length that exceeds the maximum limit of 200 characters',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('Maximun characters are 200');
});

it('should throw an error when the attribute has length less than 10', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      },
      {
        size: 'S',
        color: '#000000',
        quantity: 3,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('Minium of 20 characters required');
});

it('should return an error when creating a product with no attribute', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description 1',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: []
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('It should have at least one attribute');
});

it('should return an error when creating a product with no category', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description 1',
    price: 10,
    ProductCategory: [],
    Attribute: [
      {
        size: 'M',
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('It should have at least one category');
});

it('should throw an error when attribute has no size', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description 1',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        color: '#FFFFFF',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('The size is mandatory');
});

it('should fail validation when attribute has no color', () => {
  const invalidInput = {
    name: 'Product Name',
    description: 'Product Description 1',
    price: 10,
    ProductCategory: [
      {
        category_id: 1
      }
    ],
    Attribute: [
      {
        size: 'M',
        quantity: 5,
        image: 'https://example.com/image.jpg'
      }
    ]
  };

  const result = createProductSchema.safeParse(invalidInput);

  expect(result.success).toBe(false);
  expect(result.error.issues[0].message).toBe('The color is mandatory');
});
