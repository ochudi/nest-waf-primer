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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        const userData = await this.userRepository.save(newUser);
        return userData;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
    async setStudentById(userId, studentId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "student")
                .of(userId)
                .set(studentId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting student for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetStudentById(studentId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "student")
                .of(studentId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting student for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async setEducationalHistoryById(userId, educationalHistoryId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "educationalHistory")
                .of(userId)
                .set(educationalHistoryId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting educational history for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetEducationalHistoryById(educationalHistoryId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "educationalHistory")
                .of(educationalHistoryId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting educational history for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async setDepartmentById(userId, departmentId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "department")
                .of(userId)
                .set(departmentId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting department for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetDepartmentById(departmentId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "department")
                .of(departmentId)
                .remove(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting department for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async setRoleById(userId, roleId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "roles")
                .of(userId)
                .add(roleId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting role for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetRoleById(roleId) {
        try {
            return await this.userRepository.createQueryBuilder()
                .relation(user_entity_1.User, "roles")
                .of(roleId)
                .remove(roleId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting role for user: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map