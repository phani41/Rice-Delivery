import app from './app.js';

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () => {
  console.log(`🚀 Rice Delivery Server running on port ${PORT}`);
  console.log(`📱 API Health: http://localhost:${PORT}/api/health`);
  console.log(`🌾 Rice Products: http://localhost:${PORT}/api/rice`);
  console.log(`📦 Orders: http://localhost:${PORT}/api/orders`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});