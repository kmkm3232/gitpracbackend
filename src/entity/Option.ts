import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Item } from "./Item";
@Entity('Option')
export class Option {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, name: "option_name" })
    optionName: string;

    @Column({nullable: true, type:'jsonb', name: "choices" })
    choices: {}[];

    @ManyToOne(()=> Item, (item) => item.options)
    item: Item[];
}
