import { getRepository } from 'typeorm';
import { Email } from '../entity/Email';
import { recordsController } from './records';

export const emailsController = () => {
  const repository = getRepository(Email);

  return recordsController<Email>(repository);
};
