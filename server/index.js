const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //if issue remove this (it is related to post method)
app.use(pino);

//pino logger req.log.info('First log to consol')

app.post('/api/coinbasePrice',(req,res)=>{
    let coinbaseRequest = req.body
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({Note:`this is a test of server`,
          Data:coinbaseRequest}));
      return;
})

app.get('/api/customers', (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });
  
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);