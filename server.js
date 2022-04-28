const fs = require('fs');
const express = require('express');
var app = express();
app.listen(3000);


app.get('/', (req, res) => {
    res.send();
    
});

app.get('/rental', (req, res) => {
    res.send();
    
});


const userList = [];

fs.writeFile('userList.json', JSON.stringify(userList), err => {
    if (err) throw err;
    console.log('Saved');
});


function sayHello(yourName)
{
    console.log(`Hello there, ${yourName}`);

    let outputField = document.querySelector("#outputField");

    let name = document.querySelector("#nameBox").value;

    outputField.innerHTML = `Hello there, ${name}!`
    
}




