import { Role } from "src/student-registration/roles/entities/role.entity";
import { Student } from "../../../student-registration/students/entities/student.entity";
import { Department } from "src/student-registration/departments/entities/department.entity";
import { EducationalHistory } from "src/student-registration/educational-history/entities/educational-history.entity";
export declare class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    nationality: string;
    address: string;
    isActive: boolean;
    student: Student;
    educationalHistory: EducationalHistory;
    department: Department;
    roles: Role[];
}
