const express = require("express");
const mongoose = require("mongoose");
const mongoose = require("cors");
const routes = require("./routes");
const server = express();

mongoose.connect("mongodb+srv://omniramon:av2f8bv8@cluster0-ggdn4.mongodb.net/omnidatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);