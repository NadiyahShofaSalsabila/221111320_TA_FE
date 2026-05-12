const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => res.sendFile(path.join(__dirname, 'public', 'data.html')));
app.get('/model', (req, res) => res.sendFile(path.join(__dirname, 'public', 'model.html')));
app.get('/predict', (req, res) => res.sendFile(path.join(__dirname, 'public', 'predict.html')));
app.get('/history', (req, res) => res.sendFile(path.join(__dirname, 'public', 'history.html')));

app.get('/*path', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server A-STOCK berjalan di http://localhost:${PORT}`);
});