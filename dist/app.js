"use strict";
const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
let app = express();
app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('welcome Jason!!!!');
});
app.use((req, res, next) => {
    res.status(404);
    res.send('NOT FOUND');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=app.js.map