# Rice Delivery Backend

Node.js backend API for Bhimavaram Rice Delivery application.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## 🛠️ Built With

- Node.js
- Express.js
- Firebase Firestore
- CORS

## 🔧 Configuration

Create `.env` file with Firebase credentials:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_CLIENT_ID=your-client-id
PORT=5000
```

## 📡 API Endpoints

- `GET /api/rice` - Rice products
- `POST /api/orders` - Create order
- `GET /api/orders` - Get orders
- `PUT /api/orders/:id/status` - Update order status