//const express = require('express')
//var http = require('http')
//const app = express()
//http.createServer(function( req,res){
    //res.end("hello world")
//}).listen(3000)


//console.log("server is running")
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route=require('./src/routes/Route')



app.use(express.json());

const PORT = 8000;

mongoose.connect('mongodb+srv://preethampinto2003:sahyadri%40123@cluster0.s9genr5.mongodb.net/')
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });
 
app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


