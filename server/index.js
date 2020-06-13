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

app.post('/api/authenticateUser',(req,res)=>{
  //user login + user sensitive data will be stored together and sent 
  //to the front when login occures
  let userLogin = req.body.loginValues
  let userData= {
    userArray:[{email:"",password:"",specificUserDataArray:[""]}]
  }
  if (fs.existsSync(`./server/files/userDataFile.txt`,`utf8`) === false){
    fs.writeFileSync(`./server/files/userDataFile.txt`,JSON.stringify(userData))
  }
  let userDataArray = JSON.parse(fs.readFileSync(`./server/files/userDataFile.txt`,`utf8`)).userArray
  let validUser = false
  for (let x = 1; x < userDataArray.length;x++){
    if(userDataArray[x].email === userLogin.email && userDataArray[x].password === userLogin.password){
      validUser = true
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        validUser:validUser,
        userData:userDataArray[x]}));
      return
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    validUser:validUser,
    userData:""}));
  return
})

app.post('/api/coinbasePrice',(req,res)=>{
    let coinbaseRequest = req.body
    console.log("Hello from the server!",coinbaseRequest)
    //'BTC-USD' or 'ETH-USD' or 'EOS-USD'
    if(coinbaseRequest.tokenSelected===""){
      coinbaseRequest.data = {}
      coinbaseRequest.tokenSelected = ""
      coinbaseRequest.data.high = "0"
      coinbaseRequest.data.last = "0"
      coinbaseRequest.data.low = "0"
      res.send(JSON.stringify({
        Note:`this is a test of server`,
        Data:coinbaseRequest
      }))
      return
    }
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
app.post('/api/textBoxFileSystemSave',(req,res)=>{
  let textFromFront = req.body.textToServer
  let slotFromFront = parseInt(req.body.fileSlot,10)
  let textInFile = {
    textEntrys:["Empty","Empty","Empty","Empty","Empty","Empty"]
  }
  if (fs.existsSync(`./server/files/savedtext.txt`,`utf8`) === false){
    fs.writeFileSync(`./server/files/savedtext.txt`,JSON.stringify(textInFile))
  }
  let arrayInFile = JSON.parse(fs.readFileSync(`./server/files/savedtext.txt`,`utf8`)).textEntrys
  arrayInFile[slotFromFront] = textFromFront.substring(0,500)
  textInFile = {textEntrys:arrayInFile}
  fs.writeFileSync(`./server/files/savedtext.txt`,JSON.stringify(textInFile))
  textFromFront = `File Saved to slot ${slotFromFront}`
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({fileSlot:req.body.fileSlot,
  Data:textFromFront}));
      return
})
app.post('/api/textBoxFileSystemLoad',(req,res)=>{
  let textFromFront = req.body.textToServer
  let slotFromFront = parseInt(req.body.fileSlot,10)
  let textInFile = {
    textEntrys:["Empty","Empty","Empty","Empty","Empty","Empty"]
  }
  if (fs.existsSync(`./server/files/savedtext.txt`,`utf8`) === false){
    fs.writeFileSync(`./server/files/savedtext.txt`,JSON.stringify(textInFile))
  }
  let arrayInFile = JSON.parse(fs.readFileSync(`./server/files/savedtext.txt`,`utf8`)).textEntrys
  textFromFront = arrayInFile[slotFromFront]
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({fileSlot:req.body.fileSlot,
  Data:textFromFront}));
      return
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