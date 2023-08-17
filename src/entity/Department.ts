import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Subdepartment } from "./Subdepartment";

@Entity('Department')
export class Department {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true, name: "department_name" })
    departmentName: string;

    @OneToMany(() => Subdepartment, (subdepartments) => subdepartments.department)
    subdepartments: Subdepartment[];
}
