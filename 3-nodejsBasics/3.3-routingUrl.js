const http = require('http');


const server = http.createServer((req,res) => {
    const url = req.url;
    if(url == "/"){
        res.write("<html>")
        res.write("<head> <title>Enter message</title> </head>")
        res.write("<body><form action='/message' method ='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end();

    }
    res.setHeader("Content-type","text/html")
    res.write("<html>")
    res.write("<head> <title>My Pirst Page</title> </head>")
    res.write("<body><h1>Hello this is nodejs</h1></body>")
    res.write("</html>")
    res.end();
});

server.listen(3000);