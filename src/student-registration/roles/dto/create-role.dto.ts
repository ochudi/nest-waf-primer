import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";

export class CreateRoleDto {
    readonly roleName: string;
    readonly assignedBy?: string;
    readonly subordinates?: string;
    readonly dateAssigned?: Date;
    //readonly users: User[];
}
