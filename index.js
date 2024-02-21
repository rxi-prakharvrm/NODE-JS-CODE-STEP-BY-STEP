const express = require('express');
const path = require('path');
const app = express();

// path to public directory path
const publicPath = path.join(__dirname, "public");

// To load static content from publicPath
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("App is running on port 3000");
})