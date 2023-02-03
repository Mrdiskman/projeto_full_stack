import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn} from "typeorm"
import {v4 as uuid} from "uuid"
import { Contact } from "./contacts.entity";

@Entity()
export class User{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string

    @Column({default:""})
    number:string

    @Column({default:new Date()})
    register:Date

    @OneToMany(type=>Contact, contact => contact.user,{ eager:true })
    contacts:Contact[]
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}