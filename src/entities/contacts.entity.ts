import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
import {v4 as uuid} from "uuid"

@Entity()

export class Contact{
    @PrimaryColumn("uuid")
    readonly id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    number:string

    @Column({default:new Date()})
    register:Date

    @ManyToOne(type => User, user => user.contacts)
    @JoinColumn({name:"userId"})
    user:User
  
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}