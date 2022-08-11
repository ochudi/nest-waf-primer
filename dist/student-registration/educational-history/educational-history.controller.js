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
exports.EducationalHistoryController = void 0;
const common_1 = require("@nestjs/common");
const educational_history_service_1 = require("./educational-history.service");
const create_educational_history_dto_1 = require("./dto/create-educational-history.dto");
const update_educational_history_dto_1 = require("./dto/update-educational-history.dto");
let EducationalHistoryController = class EducationalHistoryController {
    constructor(educationalHistoryService) {
        this.educationalHistoryService = educationalHistoryService;
    }
    create(createEducationalHistoryDto) {
        return this.educationalHistoryService.create(createEducationalHistoryDto);
    }
    findAll() {
        return this.educationalHistoryService.findAll();
    }
    findOne(id) {
        return this.educationalHistoryService.findOne(+id);
    }
    update(id, updateEducationalHistoryDto) {
        return this.educationalHistoryService.update(+id, updateEducationalHistoryDto);
    }
    remove(id) {
        return this.educationalHistoryService.remove(+id);
    }
    setUserById(educationalHistoryId, userId) {
        return this.educationalHistoryService.setUserById(educationalHistoryId, userId);
    }
    unsetUserById(educationalHistoryId) {
        return this.educationalHistoryService.unsetUserById(educationalHistoryId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_educational_history_dto_1.CreateEducationalHistoryDto]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_educational_history_dto_1.UpdateEducationalHistoryDto]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':educationalHistoryId/user/userId'),
    __param(0, (0, common_1.Param)('educationalHistoryId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "setUserById", null);
__decorate([
    (0, common_1.Delete)(':educationalHistoryId/user'),
    __param(0, (0, common_1.Param)('educationalHistoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EducationalHistoryController.prototype, "unsetUserById", null);
EducationalHistoryController = __decorate([
    (0, common_1.Controller)('educational-history'),
    __metadata("design:paramtypes", [educational_history_service_1.EducationalHistoryService])
], EducationalHistoryController);
exports.EducationalHistoryController = EducationalHistoryController;
//# sourceMappingURL=educational-history.controller.js.map