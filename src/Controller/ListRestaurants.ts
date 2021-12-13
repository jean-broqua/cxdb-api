const data = require("../../Data/db.json");

export function RestaurantById(id: string): object {
    return data.find((rest) => {
        return rest.id === id;
    });
}

export function RestaurantByName(name: string): object {
    name = encodeURI(name).toUpperCase();
    return data.filter((rest) => {
        const encodedName = encodeURI(rest.name).toUpperCase();
        return encodedName.includes(name);
    });
}

export function ListAll() {
    return data;
}

export default ListAll;