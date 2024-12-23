const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.text());

let storedText = "";

app.get('/text', (req, res) => {
    if (!storedText) {
        return res.status(404).send('No text found.');
    }
    res.status(200).send(storedText);
});

app.post('/text', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Text body is required.');
    }

    storedText = req.body;
    res.status(201).send('Text saved successfully.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
