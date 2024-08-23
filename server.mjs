import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './models/user.mjs'; // Adjust the path if necessary

const app = express();

app.use(bodyParser.json());

// Route to create a user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/legendary_winner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});

export default app;
