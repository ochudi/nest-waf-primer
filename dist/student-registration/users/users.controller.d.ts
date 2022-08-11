import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createForm(): void;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    loadUserRelation(userId: number): void;
    setEducationalHistoryById1(userId: number, educationalHistoryId: number): Promise<void>;
    setEducationalHistoryById(userId: number, educationalHistoryId: number): Promise<void>;
    unsetUserEducationalHistoryById(educationalHistoryId: number): Promise<void>;
    loadUserRelation1(userId: number): void;
    setDepartmentById1(userId: number, departmentId: number): Promise<void>;
    setDepartmentById(userId: number, departmentId: number): Promise<void>;
    unsetDepartmentById(departmentId: number): Promise<void>;
    loadUserRelation2(userId: number): void;
    setRoleById1(userId: number, roleId: number): Promise<void>;
    setRoleById(userId: number, roleId: number): Promise<void>;
    unsetRoleById(roleId: number): Promise<void>;
    loadUserRelation3(userId: number): void;
    setStudentById(userId: number, studentId: number): Promise<void>;
    setStudentById1(userId: number, studentId: number): Promise<void>;
    unsetStudentById(studentId: number): Promise<void>;
}
