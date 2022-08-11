import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";
import { User } from "src/student-registration/users/entities/user.entity";

export class CreateDepartmentDto {
    readonly departmentName: string;
    readonly title?: string;
    readonly employmentType?: string;
    readonly companyName?: string;
    readonly location?: string;
    //readonly users: User[];
}
