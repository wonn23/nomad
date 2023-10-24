"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.MoviesController = void 0;
var common_1 = require("@nestjs/common");
var MoviesController = /** @class */ (function () {
    function MoviesController() {
    }
    MoviesController.prototype.getAll = function () {
        return 'This will return all movies';
    };
    MoviesController.prototype.getOne = function (id) {
        return "This will return one movie ".concat(id);
    };
    MoviesController.prototype.create = function (movieData) {
        return movieData;
    };
    MoviesController.prototype.update = function (movieId, updateData) {
        return __assign({ updatedMovie: movieId }, updateData);
    };
    MoviesController.prototype.remove = function (id) {
        return "This will remove movie ".concat(id);
    };
    MoviesController.prototype.search = function () {
        return "We are searching for a movie with a title";
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], MoviesController.prototype, "getAll", null);
    __decorate([
        (0, common_1.Get)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MoviesController.prototype, "getOne", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MoviesController.prototype, "create", null);
    __decorate([
        (0, common_1.Patch)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], MoviesController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], MoviesController.prototype, "remove", null);
    __decorate([
        (0, common_1.Get)('search'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MoviesController.prototype, "search", null);
    MoviesController = __decorate([
        (0, common_1.Controller)('movies')
    ], MoviesController);
    return MoviesController;
}());
exports.MoviesController = MoviesController;
