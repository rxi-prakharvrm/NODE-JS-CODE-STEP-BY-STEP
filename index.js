const express = require('express');
const path = require('path');
const app = express();

// path to public directory path
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs")

// To load static content from publicPath
app.use(express.static(publicPath));

app.get("", (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get("/profile", (req, res) => {
    const user = {
        name: "John Doe",
        email: "john@gmail.com",
        location: "USA",
        skills: ["HTML", "CSS", "JS", "Node.js", "React", "C++", "Python"]
    }
    res.render("profile", {user});
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/about", (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get("/contact", (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
})

app.get("*", (_, res) => {
    res.sendFile(`${publicPath}/404.html`);
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})