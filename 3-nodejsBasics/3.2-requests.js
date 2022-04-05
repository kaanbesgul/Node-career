const http = require('http');


const server = http.createServer((req,res) => {
    res.setHeader("Content-type","text/html")
    res.write("<html>")
    res.write("<head> <title>My Pirst Page</title> </head>")
    res.write("<body><h1>Hello this is nodejs</h1></body>")
    res.write("</html>")
    res.end();
});

server.listen(3000);