module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New User connect');

        socket.on('userCordinates', coords => {
            socket.broadcast.emit('newUserCoordinates', coords);
            //console.log(coords);   
        });

    });
}