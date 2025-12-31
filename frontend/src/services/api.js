const API_BASE_URL = 'http://localhost:3002/api';

export const api = {
  // Rice products
  getRiceProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/rice`);
    return response.json();
  },

  // Orders
  createOrder: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    return response.json();
  },

  getOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`);
    return response.json();
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  }
};