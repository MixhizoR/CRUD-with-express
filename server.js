import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();
const PORT = process.env.PORT || 3030;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);
app.use('/api/posts', posts);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});