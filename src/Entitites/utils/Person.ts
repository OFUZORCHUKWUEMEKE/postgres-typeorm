import { Entity,Column,BaseEntity,PrimaryColumn,CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('person')
export class Person extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id:number

   @Column()
   firstname:string;

   @Column()
   lastName:string;

   @Column({
       unique:true
   })
   email:string;
   
   @Column({
       unique:true
   })
   cardNumber:string
} 