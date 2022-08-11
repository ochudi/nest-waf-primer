"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const educational_history_service_1 = require("./educational-history.service");
const educational_history_controller_1 = require("./educational-history.controller");
const educational_history_entity_1 = require("./entities/educational-history.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let EducationalHistoryModule = class EducationalHistoryModule {
};
EducationalHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([educational_history_entity_1.EducationalHistory, user_entity_1.User])],
        controllers: [educational_history_controller_1.EducationalHistoryController],
        providers: [educational_history_service_1.EducationalHistoryService]
    })
], EducationalHistoryModule);
exports.EducationalHistoryModule = EducationalHistoryModule;
//# sourceMappingURL=educational-history.module.js.map