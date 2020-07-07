
/*
//Mandar mensajes a webex 
  var webex = require('webex/env');
webex.rooms.list({
  max: 10
})
  .then(function(rooms) {
  var room = rooms.items.filter(function (room) {
    return room.title === 'Mi Primer Room desde node!';
  })[0];

  return webex.messages.create({
    text: 'Hello World!',
    roomId: room.id
  });
})
// Make sure to log errors in case something goes wrong.
.catch(function(reason) {
  console.error(reason);
  process.exit(1);
});

*/


//para ejecutar, poner en terminal:  WEBEX_ACCESS_TOKEN=$TuToken node index.js



