import express, { query } from "express";
import SearchRestaurant from "./Controller/ListRestaurants"

const server = express();

server.get("/", (req, res) => {
    return res.send("hello");
});

// Filter test
server.get("/api/search", (req, res) => {
    return res.json(SearchRestaurant(req.query));
});

export default server;