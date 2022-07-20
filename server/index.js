const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../styles.css"))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/main.js"))
})

const port = process.env.PORT || 8008

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});