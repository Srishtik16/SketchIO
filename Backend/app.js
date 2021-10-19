const express = require("express")
const {createServer} = require("http")
const socketio = require('socket.io')('http')

const app = express()
const server = createServer(app)
// const io = socketio(server)

server.listen(8000, () => {
      console.log("The server is running at port: ", 8000);
})