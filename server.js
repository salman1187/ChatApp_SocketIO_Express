const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");

const PORT = process.env.PORT || 3000;
const staticPath = path.join(__dirname)
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello world");
})


http.listen(PORT, () => console.log(`Listening to port ${PORT}`));

//socket.io
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    console.log(`Connected to ${socket.id}`);

    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    })

})