const express = require("express");
const bodyparse = require("body-parser");
const port = 4000;

const server = new express();

server.listen(port, () => {
    console.log("Servidor inciando -> " + port);
});