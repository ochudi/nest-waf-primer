import {
    Column, Entity, JoinColumn, OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "src/student-registration/users/entities/user.entity";

@Entity()
export class EducationalHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    school: string;

    @Column({ nullable: true })
    degree: string;

    @Column({ nullable: true })
    fieldOfStudy: string;

    @Column({ nullable: true })
    startDate: Date;

    @Column({ nullable: true })
    endDate: Date;

    @Column({ nullable: true })
    grade: number;

    @JoinColumn()
    @OneToOne(() => User, user => user.educationalHistory, { cascade: true })
    user: User;
}
