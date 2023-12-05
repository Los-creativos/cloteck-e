
import { createCategoryValidator, updateCategoryValidator, filterQuery } from '../(backend)/api/category/category.schema';  // Replace with the actual path

describe('createCategoryValidator', () => {
  it('should validate a valid category', () => {
    const validCategory = {
      name: 'Valid Category',
      description: 'This is a valid category description without special characters',
    };

    const result = createCategoryValidator.parse(validCategory);

    expect(result).toEqual(validCategory);
  });

  it('should throw error for invalid category', () => {
    const invalidCategory = {
      name: 'Invalid Category!',
      description: 'This is an invalid category description with special characters!',
    };

    expect(() => createCategoryValidator.parse(invalidCategory)).toThrow();
  });
});

describe('updateCategoryValidator', () => {
  it('should validate a valid update', () => {
    const validUpdate = {
      description: 'This is a valid description for an update without special characters',
    };

    const result = updateCategoryValidator.parse(validUpdate);

    expect(result).toEqual(validUpdate);
  });

  it('should throw error for invalid update', () => {
    const invalidUpdate = {
      description: 'Invalid description with special characters!',
    };

    expect(() => updateCategoryValidator.parse(invalidUpdate)).toThrow();
  });
});

describe('filterQuery', () => {
  it('should validate a valid filter query', () => {
    const validFilterQuery = {
      limit: 5,
      page: 2,
    };

    const result = filterQuery.parse(validFilterQuery);

    expect(result).toEqual(validFilterQuery);
  });

  it('should use default values for missing fields', () => {
    const filterQueryWithMissingFields = {};

    const result = filterQuery.parse(filterQueryWithMissingFields);

    expect(result).toEqual({
      limit: 1,
      page: 10,
    });
  });
});

