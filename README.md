# Bhimavaram Rice Delivery App

A full-stack rice delivery web application for local business in Bhimavaram town, Andhra Pradesh, India.

## ✅ FIXED ISSUES

- ✅ No Firebase account needed - uses in-memory database
- ✅ All dependencies properly installed
- ✅ Backend runs on port 3001 (avoiding conflicts)
- ✅ Frontend builds successfully
- ✅ React Router properly configured

## 🚀 Quick Start

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

Backend runs on: http://localhost:3001

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend runs on: http://localhost:5173

## 🌐 API Endpoints

- `GET /api/rice` - Get all rice products
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders (admin)
- `PUT /api/orders/:id/status` - Update order status

## 🏪 Features

- **3 Rice Varieties**: Sona Masoori (₹65/kg), Basmati (₹120/kg), Bullet Rice (₹55/kg)
- **Shopping Cart**: Add, remove, update quantities
- **Checkout Process**: Customer details, delivery areas, payment options
- **Payment Methods**: COD and UPI QR code
- **Admin Dashboard**: Order management
- **Responsive Design**: Mobile-friendly

## 📍 Delivery Areas

- Two Town
- One Town
- SRKR College Area
- Housing Board
- Gunupudi

## 🔧 Technologies

**Frontend**: React 19, Vite, Tailwind CSS, React Router
**Backend**: Node.js, Express.js, In-memory database

## 📱 Pages

1. **Home** - Hero section and featured products
2. **Products** - All rice varieties
3. **Cart** - Shopping cart management
4. **Checkout** - Order placement form
5. **Order Success** - Confirmation page
6. **Admin** - Order management dashboard

## 🎯 No Firebase Required

The application uses an in-memory database for development, so you don't need:
- Firebase account
- Firebase configuration
- Environment variables (except PORT)

Orders are stored in memory and will reset when the server restarts.

## 📞 Support

For support, contact:
- Phone: +91 XXXXX XXXXX
- Email: info@bhimavaramrice.com

---

**Made with ❤️ for Bhimavaram Rice Delivery**