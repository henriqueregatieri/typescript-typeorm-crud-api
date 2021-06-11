import { Entity, Column } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Product extends Record {
  @Column()
  title: string;

  @Column()
  text: string;
}
