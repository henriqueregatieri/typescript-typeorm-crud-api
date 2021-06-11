import { createConnection, getRepository } from 'typeorm';
import { Email } from '../entity/Email';
import seed from './seed.json';

createConnection()
  .then(async () => {
    const emailRepository = getRepository(Email);

    seed.emails.map(async (email) => await emailRepository.save(email));
  })
  .catch((error) => console.log(error));
