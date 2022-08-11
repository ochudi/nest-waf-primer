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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHome() {
        return this.appService.getHome();
    }
    getAboutUs() {
        return this.appService.getAboutUs();
    }
    createForm1() {
    }
    createForm2() {
    }
    createForm3() {
    }
    createForm4() {
    }
    createForm5() {
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('home.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHome", null);
__decorate([
    (0, common_1.Get)('about-us'),
    (0, common_1.Render)('about-us.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getAboutUs", null);
__decorate([
    (0, common_1.Get)('users/create'),
    (0, common_1.Render)('users/create-user.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createForm1", null);
__decorate([
    (0, common_1.Get)('students/create'),
    (0, common_1.Render)('users/create-student.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createForm2", null);
__decorate([
    (0, common_1.Get)('departments/create'),
    (0, common_1.Render)('users/create-department.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createForm3", null);
__decorate([
    (0, common_1.Get)('roles/create'),
    (0, common_1.Render)('users/create-role.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createForm4", null);
__decorate([
    (0, common_1.Get)('educational-history/create'),
    (0, common_1.Render)('users/create-educationalHistory.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createForm5", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map