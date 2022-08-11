import { ModeOfEntry } from "../../studentRegistration.types";
import { User } from "src/student-registration/users/entities/user.entity";
export declare class Student {
    id: number;
    department: string;
    matriculationNumber: string;
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
    user: User;
}
