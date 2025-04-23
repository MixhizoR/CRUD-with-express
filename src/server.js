import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 3030;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });