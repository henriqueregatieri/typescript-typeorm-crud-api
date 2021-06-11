import { Entity, Column, ManyToOne } from 'typeorm';
import { Record } from './Record';
import { Email } from './Email';
import { Length } from 'class-validator';

@Entity()
export class Product extends Record {
  @Column()
  @Length(3, 50)
  title: string;

  @Column()
  @Length(3, 500)
  text: string;

  @ManyToOne((type) => Email, (email) => email.products, {
    onDelete: 'CASCADE',
  })
  email: Email;
}
