import server from "./server";
const port = process.env.PORT || 8000

server.listen(8000, () => {
    console.log("Running on port: " + port);
});