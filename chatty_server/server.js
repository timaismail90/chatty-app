const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid')

const PORT = 3001;

// Create a new express server
const server = express()
   // Made the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Created the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
   const counter = wss.clients.size
    wss.clients.forEach(function each (client) {
      client.send(
        JSON.stringify({
          type: 'counter',
          data: counter
        })
      );
    })
   ws.on('message', function incoming (message) {
    message = JSON.parse(message)
    console.log(message)

    if(message.type === "postMessage") {
      message.id = uuid()
      message.type = "incomingMessage"
      wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(message));

      });
    }
    else if (message.type === "postNotification") {
      // if(newUser === "")
      message.id = uuid()
       message.type = "incomingNotification"

       wss.clients.forEach(function each(client) {
        client.send(
          JSON.stringify(message)
        )

      })
    }
  })
 // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    const counter = wss.clients.size
    wss.clients.forEach(function each (client) {
      client.send(
        JSON.stringify({
          type: 'counter',
          data: counter
        })
      );
    })

  });
});






