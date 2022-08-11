"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const students_module_1 = require("./students/students.module");
const roles_module_1 = require("./roles/roles.module");
const departments_module_1 = require("./departments/departments.module");
const educational_history_module_1 = require("./educational-history/educational-history.module");
let StudentRegistrationModule = class StudentRegistrationModule {
};
StudentRegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, students_module_1.StudentsModule, roles_module_1.RolesModule, departments_module_1.DepartmentsModule, educational_history_module_1.EducationalHistoryModule]
    })
], StudentRegistrationModule);
exports.StudentRegistrationModule = StudentRegistrationModule;
//# sourceMappingURL=student-registration.module.js.map