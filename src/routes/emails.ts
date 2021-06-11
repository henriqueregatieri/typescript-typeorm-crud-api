import { Router } from 'express';
import { emailsController } from '../controllers/emails';

export const emailsRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = emailsController();

  router.get('/emails', findAll);
  router.get('/emails/:id', findOne);
  router.post('/emails', create);
  router.put('/emails/:id', update);
  router.delete('/emails/:id', remove);

  return router;
};
