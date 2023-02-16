const express = require('express');
const aboutRouter = express.Router();

aboutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.send('About Us Page')
    res.end('Will send all the about us information to you');
})
.post((req, res) => {
    res.end(`Will add the name: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /about');
})
.delete((req, res) => {
    res.end('Deleting all about us information');
});

module.exports = aboutRouter;