import { User } from "src/student-registration/users/entities/user.entity";
export declare class Role {
    id: number;
    roleName: string;
    assignedBy: string;
    subordinates: string;
    dateAssigned: Date;
    users: User[];
}
