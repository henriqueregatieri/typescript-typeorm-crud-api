import { Entity, Column, OneToMany } from 'typeorm';
import { Record } from './Record';
import { Product } from './Product';

@Entity()
export class Email extends Record {
  @Column()
  name: string;

  @OneToMany((type) => Product, (product) => product.email, {
    cascade: ['insert', 'update'],
  })
  products: Product[];
}
