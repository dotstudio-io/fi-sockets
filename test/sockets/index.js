'use strict';

module.exports = (nsp) => {

  nsp.on('connection', (socket) => {

    socket.on('test', () => {
      socket.emit('test');
    });

  });

};
