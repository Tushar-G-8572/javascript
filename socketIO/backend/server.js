const app = require('./src/app');
const SocketIo = require('socket.io');
const http = require('http');

const port = 4000;
const server = http.createServer(app);
const io = new SocketIo.Server(server);

io.on('connection',(socket)=>{
    // console.log("User connected",socket.id);
    socket.on('user-message',(message)=>{
        // console.log("A new user message",message)
        io.emit('message',message);
    });
})


server.listen(port,()=>{
    console.log("Server is running on port 4000")
})