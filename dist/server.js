"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("./mongoose"));
const server = (0, express_1.default)();
(0, mongoose_1.default)();
server.use(express_1.default.json());
server.get('/', (req, res) => {
    return res.send('hello');
});
server.get('/list', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
exports.default = server;
//# sourceMappingURL=server.js.map