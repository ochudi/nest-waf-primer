import { BaseEntity } from "typeorm";
import { User } from "src/student-registration/users/entities/user.entity";
export declare class Department extends BaseEntity {
    id: number;
    departmentName: string;
    title: string;
    employmentType: string;
    companyName: string;
    location: string;
    users: User[];
}
