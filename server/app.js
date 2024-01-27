const express = require('express');
const app = express();

//middelware

const middelware = (req,res, next) =>{
  console.log('hello my middleware');
  next();
}

app.get('/', (req,res) => {
  res.send('Hello world from the server');
})

app.listen(3000,() =>{
  console.log('server is running at port no 3000');
})