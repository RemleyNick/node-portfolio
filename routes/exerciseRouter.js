const express = require('express');
const exerciseRouter = express.Router();

exerciseRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.send('Exercise Page')
    res.end('Will send all the exercises to you');
})
.post((req, res) => {
    res.end(`Will add the exercise name: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /exercise');
})
.delete((req, res) => {
    res.end('Deleting all exercises');
});

module.exports = exerciseRouter;