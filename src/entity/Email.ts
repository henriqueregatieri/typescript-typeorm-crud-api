import { Entity, Column, OneToMany } from 'typeorm';
import { Record } from './Record';
import { Product } from './Product';
import { Length } from 'class-validator';

@Entity()
export class Email extends Record {
  @Column()
  @Length(3, 50)
  name: string;

  @OneToMany((type) => Product, (product) => product.email, {
    cascade: ['insert', 'update'],
  })
  products: Product[];
}
