import { EducationalHistoryService } from './educational-history.service';
import { CreateEducationalHistoryDto } from './dto/create-educational-history.dto';
import { UpdateEducationalHistoryDto } from './dto/update-educational-history.dto';
export declare class EducationalHistoryController {
    private readonly educationalHistoryService;
    constructor(educationalHistoryService: EducationalHistoryService);
    create(createEducationalHistoryDto: CreateEducationalHistoryDto): Promise<import("./entities/educational-history.entity").EducationalHistory>;
    findAll(): Promise<import("./entities/educational-history.entity").EducationalHistory[]>;
    findOne(id: string): Promise<import("./entities/educational-history.entity").EducationalHistory>;
    update(id: string, updateEducationalHistoryDto: UpdateEducationalHistoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    setUserById(educationalHistoryId: number, userId: number): Promise<void>;
    unsetUserById(educationalHistoryId: number): Promise<void>;
}
