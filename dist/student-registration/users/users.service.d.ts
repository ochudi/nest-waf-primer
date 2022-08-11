import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setStudentById(userId: number, studentId: number): Promise<void>;
    unsetStudentById(studentId: number): Promise<void>;
    setEducationalHistoryById(userId: number, educationalHistoryId: number): Promise<void>;
    unsetEducationalHistoryById(educationalHistoryId: number): Promise<void>;
    setDepartmentById(userId: number, departmentId: number): Promise<void>;
    unsetDepartmentById(departmentId: number): Promise<void>;
    setRoleById(userId: number, roleId: number): Promise<void>;
    unsetRoleById(roleId: number): Promise<void>;
}
