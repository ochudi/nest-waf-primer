import { Role } from "src/student-registration/roles/entities/role.entity";
import { Student } from "../../../student-registration/students/entities/student.entity";
import { Department } from "src/student-registration/departments/entities/department.entity";
import { EducationalHistory } from "src/student-registration/educational-history/entities/educational-history.entity";
import { Column, Entity, OneToOne, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column({ nullable: true })
    address: string

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(type => Student, student => student.user)
    student: Student;

    @OneToOne(type => EducationalHistory, educationalHistory => educationalHistory.user)
    educationalHistory: EducationalHistory;

    @ManyToOne(type => Department, (department) => department.users)
    department: Department

    @ManyToMany(type => Role, (roles) => roles.users)
    roles: Role[]
}
