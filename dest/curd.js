"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleting = exports.updating = exports.reading = exports.adding = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function adding(work) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                work
            },
        });
    });
}
exports.adding = adding;
function reading() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findMany();
        yield user.sort(function (a, b) { return a.id - b.id; });
        return user;
    });
}
exports.reading = reading;
function updating(id, work) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.update({
            where: {
                id,
            },
            data: {
                work
            }
        });
    });
}
exports.updating = updating;
function deleting(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUsers = yield prisma.user.delete({
            where: {
                id
            }
        });
    });
}
exports.deleting = deleting;
