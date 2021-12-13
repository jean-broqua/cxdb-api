import express from "express";
import * as list from "./Controller/ListRestaurants"

const server = express();

server.get("/", (req, res) => {
    return res.send("hello");
});

// Lists all restaurants
server.get("/api/list", (req, res) => {
    return res.json(list.ListAll());
});

// Find restaurant by id
server.get("/api/id/:id", (req, res) => {
    return res.json(list.RestaurantById(req.params.id));
});

// Find restaurant by name
server.get("/api/name/:name", (req, res) => {
    return res.json(list.RestaurantByName(req.params.name));
});

export default server;