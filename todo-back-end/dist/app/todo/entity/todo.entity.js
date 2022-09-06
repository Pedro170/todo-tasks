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
exports.TodoEntity = void 0;
const typeorm_1 = require("typeorm");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
let TodoEntity = class TodoEntity {
    constructor(todo) {
        this.CD_ID = todo === null || todo === void 0 ? void 0 : todo.CD_ID;
        this.task = todo === null || todo === void 0 ? void 0 : todo.task;
        this.isDone = todo === null || todo === void 0 ? void 0 : todo.isDone;
        this.createdAt = todo === null || todo === void 0 ? void 0 : todo.createdAt;
        this.updatedAt = todo === null || todo === void 0 ? void 0 : todo.updatedAt;
        this.deletedAt = todo === null || todo === void 0 ? void 0 : todo.deletedAt;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "CD_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NM_TASK' }),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NR_IS_DONE', type: 'tinyint', width: 1 }),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Number)
], TodoEntity.prototype, "isDone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'DT_CREATE_AT' }),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'DT_UPDATE_AT' }),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'DT_DELETED_AT' }),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "deletedAt", void 0);
TodoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'TB_TODOS' }),
    __metadata("design:paramtypes", [Object])
], TodoEntity);
exports.TodoEntity = TodoEntity;
//# sourceMappingURL=todo.entity.js.map