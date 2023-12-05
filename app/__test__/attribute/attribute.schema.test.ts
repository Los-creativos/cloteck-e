import { CreateAttributeInput, createAttributeSchema } from "@/app/(backend)/api/attribute/attribute.schema";

it("should validate input with all required fields", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  const result = createAttributeSchema.parse(input);

  expect(result).toEqual(input);
});

it("should trim string fields", () => {
  const input = {
    size: "   small   ",
    color: "   #FF0000   ",
    quantity: 10,
    image: "   https://example.com/image.jpg   ",
  };

  const expected = {
    size: "small",
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  const result = createAttributeSchema.parse(input);

  expect(result).toEqual(expected);
});

it("should throw error when size field is missing", () => {
  const input = {
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  expect(() => {
    createAttributeSchema.parse(input);
  }).toThrow("The size is mandatory");
});

it("should throw error when color field is missing", () => {
  const input = {
    size: "small",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  expect(() => {
    createAttributeSchema.parse(input);
  }).toThrow("The color is mandatory");
});

it("should throw error when quantity field is missing", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    image: "https://example.com/image.jpg",
  };

  expect(() => {
    createAttributeSchema.parse(input);
  }).toThrow("The quantity is mandatory");
});

it("should throw error when image field is missing", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    quantity: 10,
  };

  expect(() => {
    createAttributeSchema.parse(input);
  }).toThrow("The image URL is mandatory");
});

it("should validate input with a valid hex color", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  const result = createAttributeSchema.parse(input);

  expect(result).toEqual(input);
});

it("should throw an error when the color field is not a valid hex color", () => {
  const input = {
    size: "small",
    color: "invalid",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  expect(() => createAttributeSchema.parse(input)).toThrow(
    "The color is not a valid Hex color"
  );
});

it("should throw an error when the quantity field is not a positive number", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    quantity: -10,
    image: "https://example.com/image.jpg",
  };

  expect(() => createAttributeSchema.parse(input)).toThrow(
    "It should be a positive number"
  );
});

it("should throw an error when the image field is more than 300 characters", () => {
  const input = {
    size: "small",
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg".repeat(100),
  };

  expect(() => createAttributeSchema.parse(input)).toThrow(
    "Maxium characters are 300"
  );
});

it("should validate input with all fields filled with valid data", () => {
  const input = {
    size: "Small",
    color: "#FF0000",
    quantity: 10,
    image: "https://example.com/image.jpg",
  };

  expect(() => {
    createAttributeSchema.parse(input);
  }).not.toThrow();
});
