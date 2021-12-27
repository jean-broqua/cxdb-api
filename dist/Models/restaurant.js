"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
console.log(process.env.DB_URI);
const schema = new mongoose_1.Schema({
    placeName: { type: String, required: true },
    xis: { type: String, required: true },
    price: { type: Number, required: true },
    review: { type: String, required: true },
    stars: { type: Number, min: 0, max: 5, required: true }
});
const Restaurant = (0, mongoose_1.model)('Restaurant', schema);
exports.default = Restaurant;
//# sourceMappingURL=restaurant.js.map