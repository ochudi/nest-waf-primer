/*
import { CreateDepartmentDto } from "src/student-registration/departments/dto/create-department.dto";
import { CreateRoleDto } from "src/student-registration/roles/dto/create-role.dto";
import { CreateEducationalHistoryDto } from "src/student-registration/educational-history/dto/create-educational-history.dto";
import { CreateStudentDto } from "src/student-registration/students/dto/create-student.dto";
*/

export class CreateUserDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly email: string;
    readonly departmentId?: number;
    readonly dateOfBirth?: Date;
    readonly nationality?: string
    readonly address?: string
    readonly isActive?: boolean;
    /*
    readonly student?: CreateStudentDto;
    readonly educationalHistory?: CreateEducationalHistoryDto;
    readonly department?: CreateDepartmentDto;
    readonly role?: CreateRoleDto;
    */
}