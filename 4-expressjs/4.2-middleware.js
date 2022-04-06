const http = require('http');
const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('In the first middleware')
    next(); //Allows the request to continue to the next middleware
})

app.use((req,res,next) =>{
    console.log('Second middleware');
    res.send("<h1>Hello from express</h1>")
})
app.listen(3000);