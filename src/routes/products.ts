import { Router } from 'express';
import { productsController } from '../controllers/products';

export const productsRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = productsController();

  router.get('/products', findAll);
  router.get('/products/:id', findOne);
  router.post('/products', create);
  router.put('/products/:id', update);
  router.delete('/products/:id', remove);

  return router;
};
