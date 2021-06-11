import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';
import { recordsController } from './records';

export const productsController = () => {
  const repository = getRepository(Product);

  return recordsController<Product>(repository);
}
