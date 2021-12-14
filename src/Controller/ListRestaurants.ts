const database = require("../data/db.json");

interface dbData {
    id: string,
    name: string,
    address: string,
    contact: string,
    min_price: string,
    max_price: string,
}

export function ListAll() {
    return database;
}

function FindId(id: string): object {
    return database.find((rest) => {
        return rest.id === id;
    });
}

function FindName(searchName: string, data: Array<dbData>): object {
    searchName = encodeURI(searchName).toUpperCase();

    return data.filter((rest) => {
        const encodedName = encodeURI(rest.name).toUpperCase();
        return encodedName.includes(searchName);
    });
}

function FindAddress (searchAddress: string, data: Array<dbData>): object {
    searchAddress = encodeURI(searchAddress).toUpperCase();

    return data.filter((rest) => {
        const encodedAddress = encodeURI(rest.address).toUpperCase();
        return encodedAddress.includes(searchAddress);
    });
}

// Testing filtering
export function SearchRestaurant(query): object {
    if(Object.keys(query).length === 0){
        return ListAll();
    } else {
        const {id, name, address, contact, min_price, max_price}: dbData = query;

        if (typeof id !== "undefined") { // Break of if an id is provided
            return FindId(id);
        } else { // Filter based on each parameter passed
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

export default SearchRestaurant;