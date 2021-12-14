"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRestaurant = exports.ListAll = void 0;
const database = require("../../data/db.json");
function ListAll() {
    return database;
}
exports.ListAll = ListAll;
function FindId(id) {
    return database.find((rest) => {
        return rest.id === id;
    });
}
function FindName(searchName, data) {
    searchName = encodeURI(searchName).toUpperCase();
    return data.filter((rest) => {
        const encodedName = encodeURI(rest.name).toUpperCase();
        return encodedName.includes(searchName);
    });
}
function FindAddress(searchAddress, data) {
    searchAddress = encodeURI(searchAddress).toUpperCase();
    return data.filter((rest) => {
        const encodedAddress = encodeURI(rest.address).toUpperCase();
        return encodedAddress.includes(searchAddress);
    });
}
// Testing filtering
function SearchRestaurant(query) {
    if (Object.keys(query).length === 0) {
        return ListAll();
    }
    else {
        const { id, name, address, contact, min_price, max_price } = query;
        if (typeof id !== "undefined") { // Break of if an id is provided
            return FindId(id);
        }
        else { // Filter based on each parameter passed
            let result = database;
            if (typeof name !== "undefined") {
                result = FindName(name, result);
            }
            if (typeof address !== "undefined") {
                result = FindAddress(address, result);
            }
            if (typeof min_price !== "undefined") {
                // to be implemented
            }
            if (typeof max_price !== "undefined") {
                // to be implemented
            }
            return result;
        }
    }
}
exports.SearchRestaurant = SearchRestaurant;
exports.default = SearchRestaurant;
//# sourceMappingURL=ListRestaurants.js.map