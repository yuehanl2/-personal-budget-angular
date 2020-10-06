// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

app.get('/hello', (req, res) =>  {
    res.send('Hello World!');
});

app.get('/budget',(req, res)=>{
    res.sendFile(__dirname+'/budget.json');
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });