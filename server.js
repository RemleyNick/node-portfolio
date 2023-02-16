const express = require('express');
const morgan = require('morgan');
const aboutRouter = require('./routes/aboutRouter');
const exerciseRouter = require('./routes/exerciseRouter');
const contactRouter = require('./routes/contactRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/about', aboutRouter);
app.use('/exercise', exerciseRouter);
app.use('/contact', contactRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Home Page</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});