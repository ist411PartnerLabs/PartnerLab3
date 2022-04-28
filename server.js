const fs = require('fs');
const express = require('express');
var app = express();
app.listen(3000);






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




