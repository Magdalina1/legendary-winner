import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example of user routes
app.post('/users', (req, res) => {
  // Handle creating a user
});

app.get('/users/:id', (req, res) => {
  // Handle retrieving a user by ID
});

// More routes as needed...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing
export default app;
