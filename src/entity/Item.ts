import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Subdepartment } from "./Subdepartment";
import { Option } from "./Option";

class OptionDto{
    name: string;
    choices: {
        choiceId: number;
        name: String;
        price: number
    }[];
}

@Entity('Item')
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true, name: "item_name" })
    itemName: string;

    @Column({ nullable: true, name: "price" , type: "decimal", precision: 8, scale: 2})
    price: number;

    @Column({ nullable: true, name: "discount", type: "decimal", precision: 3, scale: 2})
    discount: number;

    @Column({ nullable: true, name: "ratings", type: "decimal", precision: 3, scale: 2})
    ratings: number;

    @Column({ nullable: true, name: "rating_count" })
    ratingCount: number;

    @Column({ nullable: true, name: "about" })
    about: string;

    @ManyToOne(()=> Subdepartment, (subdepartment) => subdepartment.items)
    subdepartment: Subdepartment[];

    @OneToMany(() => Option, (options) => options.item)
    options: Option[];
}
