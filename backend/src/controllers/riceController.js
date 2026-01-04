import { db } from '../config/firebase.js';

// Updated rice products based on SRINIVASA RICE
const riceProducts = [
  {
    id: '1',
    name: 'GODAVARI SANNALU',
    description: 'Premium quality Godavari Sannalu rice',
    price: 1450,
    weight: '26kg',
    stock: 100,
    image: 'https://www.exoticestore.com/cdn/shop/products/PHOTO-2023-02-24-10-49-14.jpg?v=1677235844'
  },
  {
    id: '2',
    name: 'Brown Rice',
    description: 'Healthy brown rice for nutritious meals',
    price: 330,
    weight: '5kg',
    stock: 50,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhi8ed7oI4V8mnhd0kgRXvgxIUvf49MKU2JxTl43BXv1tw9HcpFIIq6GGL4e1WFnqA5LiBJBpB0TVyJagqaVTDRam5N0JL1A7vPwxAY6_LD2ZRWRziA7qMjQ'
  },
  {
    id: '3',
    name: 'Sona Masoori Rice',
    description: 'Premium Sona Masoori rice for daily cooking',
    price: 1600,
    weight: '26kg',
    stock: 75,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRllJ13LOAHoO0q6bwuEaX22l_cPJaOiDd_0w6E_URZ34wp9ABudqYMFOlut3yMoy19oe5-gdn5RyTnTEuOxLUNAbAr_ksYkHhua5xdJByH8W7Gq9xCdetknlY'
  },
  {
    id: '4',
    name: 'Kohinoor',
    description: 'Premium Kohinoor basmati rice',
    price: 1700,
    weight: '26kg',
    stock: 60,
    image: 'https://barkatrice.in/wp-content/uploads/2025/05/3318d6e63ffd3dfcb186622bac975f44.jpg'
  },
  {
    id: '5',
    name: 'Zeebra',
    description: 'High quality Zeebra rice',
    price: 1800,
    weight: '26kg',
    stock: 40,
    image: 'https://suppletek.com/wp-content/uploads/2022/01/1.-Classic-scaled.png'
  },
  {
    id: '6',
    name: 'Godavari HMT',
    description: 'Traditional HMT rice variety',
    price: 1500,
    weight: '26kg',
    stock: 80,
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/rice/u/d/s/26-godavari-resortexed-rice-hmt-26-kg-white-steam-bag-hmt-rice-original-imah6xrbvyfr9dht.jpeg?q=90'
  },
  {
    id: '7',
    name: 'Godavari Brown',
    description: 'Healthy brown rice from Godavari',
    price: 1450,
    weight: '26kg',
    stock: 70,
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/rice/x/b/y/26-godavari-resortexed-rice-sonamasoori-26-kg-white-steam-bag-original-imah6xrhxgxguhsh.jpeg?q=20'
  },
  {
    id: '8',
    name: 'Daawat',
    description: 'Premium Daawat basmati rice',
    price: 1400,
    weight: '26kg',
    stock: 90,
    image: 'https://myishopy.com/supermart/wp-content/uploads/2021/09/DAAWAT-TRADITIONAL-BASMATI-RICE-KG.jpg'
  },
  {
    id: '9',
    name: 'Banoo',
    description: 'Quality Banoo basmati rice',
    price: 1450,
    weight: '26kg',
    stock: 65,
    image: 'https://cpimg.tistatic.com/01289280/b/7/INDIAN-BASMATI-RICE.jpg'
  }
];

export const getAllRice = async (req, res) => {
  try {
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