const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005
// This will get the PORT variable from Heroku. However, if one isn't assigned (local testing) it will use 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});