import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { User } from '../users/entities/user.entity';
import { Department } from './entities/department.entity';
export declare class DepartmentsService {
    private departmentRepository;
    private userRepository;
    constructor(departmentRepository: Repository<Department>, userRepository: Repository<User>);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setUserById(departmentId: number, userId: number): Promise<void>;
    unsetUserById(departmentId: number): Promise<void>;
}
