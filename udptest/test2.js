var PORT = 22222 ;
var HOST = '239.0.2.10';
var dgram = require('dgram');
var message="."
var client = dgram.createSocket('udp4');

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

client.on('message', function (message, remote) {

    console.log(remote.address + ':' + remote.port +' - ' + message);

});

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {

    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);

});