import express = require('express');
import body = require('body-parser');
import cookie = require('cookie-parser');

let app = express();

app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('welcome tony!!!!');
});

app.use((req, res, next) => {
    res.status(404);
    res.send('NOT FOUND');
});

export default app;
