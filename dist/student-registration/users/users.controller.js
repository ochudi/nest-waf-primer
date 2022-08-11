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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createForm() {
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
    loadUserRelation(userId) {
    }
    setEducationalHistoryById1(userId, educationalHistoryId) {
        return this.usersService.setEducationalHistoryById(+userId, +educationalHistoryId);
    }
    setEducationalHistoryById(userId, educationalHistoryId) {
        return this.usersService.setEducationalHistoryById(+userId, +educationalHistoryId);
    }
    unsetUserEducationalHistoryById(educationalHistoryId) {
        return this.usersService.unsetEducationalHistoryById(+educationalHistoryId);
    }
    loadUserRelation1(userId) {
    }
    setDepartmentById1(userId, departmentId) {
        return this.usersService.setDepartmentById(+userId, +departmentId);
    }
    setDepartmentById(userId, departmentId) {
        return this.usersService.setDepartmentById(+userId, +departmentId);
    }
    unsetDepartmentById(departmentId) {
        return this.usersService.unsetDepartmentById(+departmentId);
    }
    loadUserRelation2(userId) {
    }
    setRoleById1(userId, roleId) {
        return this.usersService.setRoleById(+userId, +roleId);
    }
    setRoleById(userId, roleId) {
        return this.usersService.setRoleById(+userId, +roleId);
    }
    unsetRoleById(roleId) {
        return this.usersService.unsetRoleById(+roleId);
    }
    loadUserRelation3(userId) {
    }
    setStudentById(userId, studentId) {
        return this.usersService.setStudentById(+userId, +studentId);
    }
    setStudentById1(userId, studentId) {
        return this.usersService.setStudentById(+userId, +studentId);
    }
    unsetStudentById(studentId) {
        return this.usersService.unsetStudentById(+studentId);
    }
};
__decorate([
    (0, common_1.Get)('create'),
    (0, common_1.Render)('users/create-user.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createForm", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':userId/educationalHistory'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loadUserRelation", null);
__decorate([
    (0, common_1.Get)(':userId/educationalHistory/:educationalHistoryId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('educationalHistoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setEducationalHistoryById1", null);
__decorate([
    (0, common_1.Patch)(':userId/educationalHistory/:educationalHistoryId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('educationalHistoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setEducationalHistoryById", null);
__decorate([
    (0, common_1.Delete)('educationalHistory/:educationalHistoryId'),
    __param(0, (0, common_1.Param)('educationalHistoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unsetUserEducationalHistoryById", null);
__decorate([
    (0, common_1.Get)(':userId/department'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loadUserRelation1", null);
__decorate([
    (0, common_1.Get)(':userId/department/:departmentId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setDepartmentById1", null);
__decorate([
    (0, common_1.Patch)(':userId/department/:departmentId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setDepartmentById", null);
__decorate([
    (0, common_1.Delete)('department/:departmentId'),
    __param(0, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unsetDepartmentById", null);
__decorate([
    (0, common_1.Get)(':userId/roles'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loadUserRelation2", null);
__decorate([
    (0, common_1.Get)(':userId/roles/:roleId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setRoleById1", null);
__decorate([
    (0, common_1.Patch)(':userId/roles/:roleId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setRoleById", null);
__decorate([
    (0, common_1.Delete)('roles/:roleId'),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unsetRoleById", null);
__decorate([
    (0, common_1.Get)(':userId/students'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loadUserRelation3", null);
__decorate([
    (0, common_1.Get)(':userId/students/:studentId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setStudentById", null);
__decorate([
    (0, common_1.Patch)(':userId/students/:studentId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "setStudentById1", null);
__decorate([
    (0, common_1.Delete)('student/:studentId'),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unsetStudentById", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map