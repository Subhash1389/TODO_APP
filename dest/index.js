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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curd_1 = require("./curd"); // Note: No need to specify the file extension
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "static")));
app.set('views', path_1.default.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');
app.get('/todo', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield (0, curd_1.reading)();
    yield res.render("todo", {
        todo: data
    });
}));
app.post('/todo', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const task = req.body.task;
    yield (0, curd_1.adding)(task);
    let data = yield (0, curd_1.reading)();
    yield res.render("todo", {
        todo: data
    });
}));
app.post('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const idd = +id;
    const newTask = req.body.tasktoup;
    yield (0, curd_1.updating)(idd, newTask);
    res.redirect('/todo');
}));
app.post('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const idd = +id;
    yield (0, curd_1.deleting)(idd);
    res.redirect('/todo');
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
