"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEducationalHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_educational_history_dto_1 = require("./create-educational-history.dto");
class UpdateEducationalHistoryDto extends (0, mapped_types_1.PartialType)(create_educational_history_dto_1.CreateEducationalHistoryDto) {
}
exports.UpdateEducationalHistoryDto = UpdateEducationalHistoryDto;
//# sourceMappingURL=update-educational-history.dto.js.map