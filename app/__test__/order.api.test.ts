import {
  getOrdersByItems,
  updateOrderStatus,
  updateProductOrderStatus,
  deleteOrderProduct,
  clearOrders, getOrdersByUser,
} from '@/app/(backend)/api/order/order.service';



describe('API Functions', () => {

  it('should throw a error when a valid user is provided', async () => {
    const userID = 1;

    const result = await getOrdersByUser(userID);

    expect(result).toBeDefined();
    expect(result).toHaveProperty('error')
    expect(result.status).toEqual(400)
  });

  it('should throw an error when the order is not found', async () => {
    const invalidUserID = 999;
    const result = await getOrdersByUser(invalidUserID)

    expect(result.error).toEqual("An error occurred")
    expect(result.status).toEqual(400)
  });

  it('should return a list of products when getOrdersByItems is called', async () => {
    const mockProductList: any[] = [];

    const result = await getOrdersByItems(1);

    expect(result.status).toEqual(400);
    expect(result).toBeDefined()
    expect(result).toHaveProperty("error")
  });

  it('should throw a error when updateOrderStatus is called', async () => {
    const mockOrderId = 1;
    const mockActive = false;

    const result = await updateOrderStatus(mockOrderId, mockActive);

    expect(result.status).toEqual(500);
    expect(result).toBeDefined()
    expect(result).toHaveProperty("error")
  });

  it('should throw a error when updateProductOrderStatus is called', async () => {
    const mockProductOrderId = 1;
    const mockQuantity = 5;

    const result = await updateProductOrderStatus(mockProductOrderId, mockQuantity);

    expect(result.status).toEqual(500);
    expect(result).toBeDefined()
    expect(result).toHaveProperty("error")
  });

  it('should throw a error when deleteOrderProduct is called', async () => {
    const mockOrderID = 1;
    const mockSize = 'S';
    const mockColor = 'Red';

    const result = await deleteOrderProduct(mockOrderID, mockSize, mockColor);

    expect(result).toBeDefined();
    expect(result.status).toEqual(500);
    expect(result.error).toBeUndefined()
  });

  it('should clear orders when clearOrders is called', async () => {
    const mockResponse = 'Successful Clear Cart';

    const result = await clearOrders();

    expect(result.status).toEqual(500);
    expect(result).toHaveProperty("error")
  });


});

