const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //if issue remove this (it is related to post method)
app.use(pino);

const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

//pino logger req.log.info('First log to consol')

app.post('/api/coinbasePrice',(req,res)=>{
    let coinbaseRequest = req.body
    console.log("Hello from the server!",coinbaseRequest)
    //'BTC-USD' or 'ETH-USD' or 'EOS-USD'
    publicClient
    .getProduct24HrStats(coinbaseRequest.tokenSelected)
    .then(data => {coinbaseRequest.data = data})
    .then(() => res.setHeader('Content-Type', 'application/json'))
    .then(() => res.send(JSON.stringify({
      Note:`this is a test of server`,
      Data:coinbaseRequest
    })))
    .catch(error => {
      console.log(error)
    });
      return;
})

app.post('/api/textBoxServer',(req,res)=>{
  let textFromFront = req.body.textToServer.substring(0,20)
textFromFront = `Server sees your text:
(${textFromFront}...)
 and says "Hi, I can do
 anything with this text"`
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({Note:`this is a test of server`,
        Data:textFromFront}));
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