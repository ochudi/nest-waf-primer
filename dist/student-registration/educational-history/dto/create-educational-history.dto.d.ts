import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";
export declare class CreateEducationalHistoryDto {
    readonly school: string;
    readonly degree?: string;
    readonly fieldOfStudy?: string;
    readonly startDate?: Date;
    readonly endDate?: Date;
    readonly grade?: number;
    readonly user: CreateUserDto;
}
