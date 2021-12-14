"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ListRestaurants_1 = __importDefault(require("./Controller/ListRestaurants"));
const server = (0, express_1.default)();
server.get("/", (req, res) => {
    return res.send("hello");
});
// Filter test
server.get("/api/search", (req, res) => {
    return res.json((0, ListRestaurants_1.default)(req.query));
});
exports.default = server;
//# sourceMappingURL=server.js.map