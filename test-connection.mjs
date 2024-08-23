const mongoose = require('mongoose');

const testUri = 'mongodb+srv://magdalina2:5weCXtqZCVsJn2Zt@cluster0.mongodb.net/LegendaryDB?retryWrites=true&w=majority';

mongoose.connect(testUri)
  .then(() => {
    console.log('MongoDB Connected');
    mongoose.connection.close();
  })
  .catch(err => console.error('MongoDB connection error:', err));
