import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { User } from '../users/entities/user.entity';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private roleRepository;
    private userRepository;
    constructor(roleRepository: Repository<Role>, userRepository: Repository<User>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setRoleById(roleId: number, userId: number): Promise<void>;
    unsetRoleById(userId: number): Promise<void>;
}
