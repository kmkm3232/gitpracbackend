import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('User')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({ nullable: true, name: "first_name" })
    firstName: string;

    @Column({ nullable: true, name: "last_name" })
    lastName: string;

    @Column({ nullable: true, name: "age" })
    age: number;

}
