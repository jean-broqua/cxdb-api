import server from "./server";
const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log("Running on port: " + port);
});