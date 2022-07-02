import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimiter from 'express-rate-limit';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import fileUpload from 'express-fileupload';
import cloudinaryModule from 'cloudinary';
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// db
import connectDB from './db/connectDB.js';

// image router
import imageRouter from './routes/imageRouter.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message:
      'Too many requests from this IP, please try again after 15 minutes',
  })
);

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.get('/', (req, res) => {
  res.status(200).send('image uploader');
});

app.use('/api/v1', imageRouter);
// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log('Server is listening on port 5000...'));
  } catch (error) {
    console.log(error);
  }
};

start();
