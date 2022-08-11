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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const role_entity_1 = require("./entities/role.entity");
let RolesService = class RolesService {
    constructor(roleRepository, userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }
    async create(createRoleDto) {
        const newRole = this.roleRepository.create(createRoleDto);
        return this.roleRepository.save(newRole);
    }
    async findAll() {
        return await this.roleRepository.find({ relations: ['users'] });
    }
    async findOne(id) {
        return await this.roleRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, updateRoleDto) {
        return await this.roleRepository.update(id, updateRoleDto);
    }
    async remove(id) {
        return await this.roleRepository.delete(id);
    }
    async setRoleById(roleId, userId) {
        try {
            return await this.roleRepository.createQueryBuilder()
                .relation(role_entity_1.Role, "users")
                .of(roleId)
                .add(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for role: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetRoleById(userId) {
        try {
            return await this.roleRepository.createQueryBuilder()
                .relation(role_entity_1.Role, "users")
                .of(userId)
                .remove(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for role: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map