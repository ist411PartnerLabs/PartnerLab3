const fs = require('fs');
const express = require('express');
var app = express();

app.listen(3000);


var userList = ["Hello", "World"];

app.get('/', (req, res) => {
    res.send();
    
});

app.get('/createusername', (req, res) => {
    res.send('<h2>Create Username Page</h2>');

});

app.get('/createreservation', (req, res) => {
    res.send('<h2>Create Reservation Page</h2>');
    
});

app.get('/managereservation', (req, res) => {
    res.send('<h2>Manage Reservation Page</h2>');
    
});


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




