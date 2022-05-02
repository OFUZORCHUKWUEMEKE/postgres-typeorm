import { Entity,Column,BaseEntity,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity('client')
export class Client extends BaseEntity  {

    @PrimaryColumn()
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
       length:10,
       unique:true
   })
   cardNumber:string

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
   @UpdateDateColumn()
   updatedAt:Date

   @CreateDateColumn()
   createdAt:Date
   






} 