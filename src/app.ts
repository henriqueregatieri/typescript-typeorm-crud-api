import express from 'express';
import cors from 'cors';
import { productsRoutes } from './routes/products';
import { emailsRoutes } from './routes/emails';

export const app = async (port: number) => {
  // create and setup express app
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.set('trust proxy', 1); // required for Heroku

  const router = express.Router();
  app.use(productsRoutes(router));
  app.use(emailsRoutes(router));

  // start express server
  app.listen(port);
};
