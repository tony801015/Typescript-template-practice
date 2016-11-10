import http = require('http');
import app from './app'; //import app=require('./app'); app.default

let server = http.createServer(app);
let port = process.env.PORT || '3000';

server.listen(port, () => {
    console.log(`Server is listen on : ${port}`);
});
