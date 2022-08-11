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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const department_entity_1 = require("./entities/department.entity");
let DepartmentsService = class DepartmentsService {
    constructor(departmentRepository, userRepository) {
        this.departmentRepository = departmentRepository;
        this.userRepository = userRepository;
    }
    async create(createDepartmentDto) {
        const newDepartment = this.departmentRepository.create(createDepartmentDto);
        return this.departmentRepository.save(newDepartment);
    }
    async findAll() {
        return await this.departmentRepository.find({ relations: ['users'] });
    }
    async findOne(id) {
        return await this.departmentRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, updateDepartmentDto) {
        return await this.departmentRepository.update(id, updateDepartmentDto);
    }
    async remove(id) {
        return await this.departmentRepository.delete(id);
    }
    async setUserById(departmentId, userId) {
        try {
            return await this.departmentRepository.createQueryBuilder()
                .relation(department_entity_1.Department, "users")
                .of(departmentId)
                .set(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for department: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetUserById(departmentId) {
        try {
            return await this.departmentRepository.createQueryBuilder()
                .relation(department_entity_1.Department, "users")
                .of(departmentId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for department: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map