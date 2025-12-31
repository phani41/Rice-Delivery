import { db } from '../config/firebase.js';

// Sample rice data
const riceProducts = [
  {
    id: '1',
    name: 'Sona Masoori Rice',
    description: 'Premium quality Sona Masoori rice, perfect for daily meals',
    price: 65,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
  },
  {
    id: '2', 
    name: 'Basmati Rice',
    description: 'Aromatic long-grain Basmati rice, ideal for biryanis',
    price: 120,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400'
  },
  {
    id: '3',
    name: 'Bullet Rice',
    description: 'Short-grain bullet rice, great for South Indian dishes',
    price: 55,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400'
  }
];

export const getAllRice = async (req, res) => {
  try {
    // In a real app, you might store this in Firestore
    // For now, returning static data
    res.json(riceProducts);
  } catch (error) {
    console.error('Error fetching rice products:', error);
    res.status(500).json({ error: 'Failed to fetch rice products' });
  }
};

export const getRiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const rice = riceProducts.find(r => r.id === id);
    
    if (!rice) {
      return res.status(404).json({ error: 'Rice product not found' });
    }
    
    res.json(rice);
  } catch (error) {
    console.error('Error fetching rice product:', error);
    res.status(500).json({ error: 'Failed to fetch rice product' });
  }
};