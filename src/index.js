const express = require ('express');
const { response } = require('express');
const server = express ();

server.get('/teste', (req, resp) =>{
    resp.send('Mudando e mudando API');
});

server.listen (3000, ()  => {
    console.log('API ONLINE');
  
});