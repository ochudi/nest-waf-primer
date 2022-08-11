"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const educational_history_entity_1 = require("./entities/educational-history.entity");
let EducationalHistoryService = class EducationalHistoryService {
    constructor(educationalHistoryRepository, userRepository) {
        this.educationalHistoryRepository = educationalHistoryRepository;
        this.userRepository = userRepository;
    }
    async create(createEducationalHistoryDto) {
        const newEducationalHistory = this.educationalHistoryRepository.create(createEducationalHistoryDto);
        if (createEducationalHistoryDto.user) {
            const newUser = this.userRepository.create(createEducationalHistoryDto.user);
            const user = await this.userRepository.save(newUser);
            newEducationalHistory.user = user;
        }
        return this.educationalHistoryRepository.save(newEducationalHistory);
    }
    async findAll() {
        return await this.educationalHistoryRepository.find({ relations: ['user'] });
    }
    async findOne(id) {
        return await this.educationalHistoryRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, updateEducationalHistoryDto) {
        return await this.educationalHistoryRepository.update(id, updateEducationalHistoryDto);
    }
    async remove(id) {
        return await this.educationalHistoryRepository.delete(id);
    }
    async setUserById(educationalHistoryId, userId) {
        try {
            return await this.educationalHistoryRepository.createQueryBuilder()
                .relation(educational_history_entity_1.EducationalHistory, "user")
                .of(educationalHistoryId)
                .set(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for educational history: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetUserById(educationalHistoryId) {
        try {
            return await this.educationalHistoryRepository.createQueryBuilder()
                .relation(educational_history_entity_1.EducationalHistory, "user")
                .of(educationalHistoryId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for this educational history: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
EducationalHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(educational_history_entity_1.EducationalHistory)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EducationalHistoryService);
exports.EducationalHistoryService = EducationalHistoryService;
//# sourceMappingURL=educational-history.service.js.map