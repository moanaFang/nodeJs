//express文件: http://expressjs.com/en/4x/api.html#app

require("dotenv").config();

const port = process.env.port || 3000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`server started: ${port}`);
});
