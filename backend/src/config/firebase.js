// Simple in-memory database for development (no Firebase needed)
let orders = [];
let orderIdCounter = 1;

// Mock database interface
export const db = {
  collection: (collectionName) => {
    if (collectionName === 'orders') {
      return {
        add: async (data) => {
          const newOrder = {
            id: (orderIdCounter++).toString(),
            ...data,
            createdAt: new Date()
          };
          orders.push(newOrder);
          return { id: newOrder.id };
        },
        get: async () => ({
          forEach: (callback) => {
            orders.forEach(order => {
              callback({
                id: order.id,
                data: () => order
              });
            });
          }
        }),
        orderBy: () => ({
          get: async () => ({
            forEach: (callback) => {
              const sortedOrders = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              sortedOrders.forEach(order => {
                callback({
                  id: order.id,
                  data: () => order
                });
              });
            }
          })
        }),
        doc: (id) => ({
          get: async () => {
            const order = orders.find(o => o.id === id);
            return {
              exists: !!order,
              id: order?.id,
              data: () => order
            };
          },
          update: async (updateData) => {
            const orderIndex = orders.findIndex(o => o.id === id);
            if (orderIndex !== -1) {
              orders[orderIndex] = { ...orders[orderIndex], ...updateData };
            }
          }
        })
      };
    }
    return {};
  }
};

console.log('✅ Using in-memory database (no Firebase required)');

export const admin = null; // Not needed for development