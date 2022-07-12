
module.exports = (socket) => {
    try {
        console.log("Connected");
        socket.on("code", (data, callback) => {
            socket.brodcast.emit("code", data);
        })
    } catch (ex) {
        console.log(ex.message);
    }
}