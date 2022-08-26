import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonsDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  country: string;

  @Column()
  state: string;

  @Column('text')
  zipcode: string;

  @Column('text')
  city: string;
}
