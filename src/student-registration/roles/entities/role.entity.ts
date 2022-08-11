import {
    Column, Entity, JoinTable, ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "src/student-registration/users/entities/user.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;

    @Column({ nullable: true })
    assignedBy: string;

    @Column({ nullable: true })
    subordinates: string;

    @Column({ nullable: true })
    dateAssigned: Date;

    @JoinTable()
    @ManyToMany(() => User, (user) => user.roles, {
        cascade: true
    })
    users: User[]
}