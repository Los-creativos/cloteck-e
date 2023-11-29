export async function fetchCategoryProducts(categoryId) {
  try {
    const response = await fetch(`http://localhost:3000/api/category/${categoryId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error; // Re-throw the error for further handling
  }
}
