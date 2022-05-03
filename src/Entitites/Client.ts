import { Entity,Column,BaseEntity,PrimaryColumn,CreateDateColumn,UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { Banker } from "./Banker";
import { Transactions } from "./Transactions";
import { Person } from "./utils/Person";

@Entity('client')
export class Client extends Person  {

   @Column({
       type:"numeric"
   })
   balance:number

   @Column({
       default:true,
       name:'active'
   })
   isActive:boolean
   @Column({
       type:"simple-json",
       nullable:true
   })
   additionalInfo :{
       age:number,
       hairColor:string
   }
   @Column({
       type:'simple-array',
       default:[]
   })
   familyMembers:string[]

   @OneToMany(
       ()=>Transactions,
       transactions=>transactions.client
   )
   transactions:Transactions[]

   @ManyToMany(
       ()=>Banker
   )
   bankers:Banker[]

   @UpdateDateColumn()
   updatedAt:Date

   @CreateDateColumn()
   createdAt:Date
} 