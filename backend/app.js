const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const server = http.Server(app);
const io = socketIO(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io logic
io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    });
  });
});

// Enable CORS
app.use(cors());

app.use(express.json());

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hr_management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

connectToDatabase();

// Import and use the defined routes
const routes = require('./routes/routes'); // Update the path accordingly
app.use('/', routes); // Use the router at the root URL

// Start the server
const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
