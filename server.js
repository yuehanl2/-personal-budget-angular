const express = require('express');
const app = express();
const port = 3000;


//fetch("./budget.json")

app.use('/', express.static('public'));

app.get('/hello', (req, res) =>  {
    res.send('Hello World!');
});

app.get('/budget',(req, res)=>{
    res.sendFile(__dirname+'/budget.json');
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
  });