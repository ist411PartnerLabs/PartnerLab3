const fs = require('fs');
const express = require('express');

function createUsername()
{
    var userName = document.getElementById("createUsernameBox").value;
    const URL = 'localhost:3000/createusername'
    URL.post(URL, res => {
        res.statusCode = 200;
        res.setHeader('Content-type','text/plain');
        res.write('Date Log');
        res.end();
    })   
}

function login()
{
    var userName = document.getElementById("usernameBox").value;

}