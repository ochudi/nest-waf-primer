import {
    BaseEntity,
    Column, Entity, JoinColumn, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "src/student-registration/users/entities/user.entity";

@Entity()
export class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departmentName: string;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    employmentType: string;

    @Column({ nullable: true })
    companyName: string;

    @Column({ nullable: true })
    location: string;

    @JoinColumn()
    @OneToMany(() => User, users => users.department)
    users: User[]
}
