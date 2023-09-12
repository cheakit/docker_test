const express = require('express');
const os = require('os');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
        hostname: os.hostname(),
        version: process.env.VERSION,
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});