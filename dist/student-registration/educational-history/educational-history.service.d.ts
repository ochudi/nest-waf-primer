import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateEducationalHistoryDto } from './dto/create-educational-history.dto';
import { UpdateEducationalHistoryDto } from './dto/update-educational-history.dto';
import { EducationalHistory } from './entities/educational-history.entity';
export declare class EducationalHistoryService {
    private educationalHistoryRepository;
    private userRepository;
    constructor(educationalHistoryRepository: Repository<EducationalHistory>, userRepository: Repository<User>);
    create(createEducationalHistoryDto: CreateEducationalHistoryDto): Promise<EducationalHistory>;
    findAll(): Promise<EducationalHistory[]>;
    findOne(id: number): Promise<EducationalHistory>;
    update(id: number, updateEducationalHistoryDto: UpdateEducationalHistoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setUserById(educationalHistoryId: number, userId: number): Promise<void>;
    unsetUserById(educationalHistoryId: number): Promise<void>;
}
