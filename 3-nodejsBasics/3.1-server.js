//If i have a local file for import it should starts with ./
const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000);