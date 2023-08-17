import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Department } from "./Department";
import { Item } from "./Item";

@Entity('Subdepartment')
export class Subdepartment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true, name: "subdepartment_name" })
    subdepartmentName: string;

    @ManyToOne(()=> Department, (department) => department.subdepartments)
    department: Department[];

    @OneToMany(() => Item, (items) => items.subdepartment)
    items: Item[];
}
