import { db } from '../config/firebase.js';

export const createOrder = async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      createdAt: new Date(),
      orderStatus: 'pending',
      paymentStatus: req.body.paymentMethod === 'cod' ? 'pending' : 'paid'
    };

    const docRef = await db.collection('orders').add(orderData);
    
    res.status(201).json({
      id: docRef.id,
      message: 'Order created successfully'
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const ordersSnapshot = await db.collection('orders')
      .orderBy('createdAt', 'desc')
      .get();
    
    const orders = [];
    ordersSnapshot.forEach(doc => {
      const data = doc.data();
      orders.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt
      });
    });
    
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDoc = await db.collection('orders').doc(id).get();
    
    if (!orderDoc.exists) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    const data = orderDoc.data();
    res.json({
      id: orderDoc.id,
      ...data,
      createdAt: data.createdAt
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    await db.collection('orders').doc(id).update({
      orderStatus: status,
      updatedAt: new Date()
    });
    
    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Failed to update order status' });
  }
};