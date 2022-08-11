import { User } from "src/student-registration/users/entities/user.entity";
export declare class EducationalHistory {
    id: number;
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: Date;
    endDate: Date;
    grade: number;
    user: User;
}
