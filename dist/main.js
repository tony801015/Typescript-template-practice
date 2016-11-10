"use strict";
const http = require('http');
const app_1 = require('./app'); //import app=require('./app'); app.default
let server = http.createServer(app_1.default);
let port = process.env.PORT || '3000';
server.listen(port, () => {
    console.log(`Server is listen on : ${port}`);
});
//# sourceMappingURL=main.js.map