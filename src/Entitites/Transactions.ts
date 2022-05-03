import {BaseEntity, Column,Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from 'typeorm'
import { Client } from './Client'


export enum TransactioonType  {
    DEPOSIT = 'deposit',
    WITHDRAW='withdraw'
}

@Entity('transactions')
export class Transactions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:'enum',
        enum:TransactioonType
    })
    type:string

    @Column({
        type:'numeric'
    })
    amount:number

    @ManyToOne(
        ()=> Client,
        client=>client.transactions
    )
    @JoinColumn({
        name:'clientId'
    })
    client:Client
}