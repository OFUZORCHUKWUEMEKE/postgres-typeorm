import { Entity,Column,BaseEntity,PrimaryColumn,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity('Banker')
export class Banker extends Person{
  @Column({
      unique:true,
      length:10
  })
  employeeNumber:string

  @ManyToMany((
      ()=>Client
  ))
  @JoinTable({
      name:'bankers_clients',
      joinColumn:{
          name:"banker",
          referencedColumnName:'id'
      },
      inverseJoinColumn:{
          name:"client",
          referencedColumnName:'id'
      }
  })
  clients:Client[]


   @UpdateDateColumn()
   updatedAt:Date

   @CreateDateColumn()
   createdAt:Date
} 