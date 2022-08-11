import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<import("./entities/department.entity").Department>;
    findAll(): Promise<import("./entities/department.entity").Department[]>;
    findOne(id: string): Promise<import("./entities/department.entity").Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    setUserById1(departmentId: number, userId: number): Promise<void>;
    setUserById(departmentId: number, userId: number): Promise<void>;
    unsetUserById(studentId: number): Promise<void>;
}
