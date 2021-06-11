import { Entity, Column, ManyToOne } from 'typeorm';
import { Record } from './Record';
import { Email } from './Email';

@Entity()
export class Product extends Record {
  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne((type) => Email, (email) => email.products, {
    onDelete: 'CASCADE',
  })
  email: Email;
}
