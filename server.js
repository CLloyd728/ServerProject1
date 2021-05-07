var express = require('express'); // requre the express framework
var app = express();

// Endpoint Test
app.put('/', (req, res) => {
    res.end("Test");
})
//just some text on the main page to make sure that it is all loading
app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the test webpage just to show that it is running\n');
});
// Create a server to listen at port 1337
var server = app.listen(1337, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("ServerProject1 listening at http://%s:%s", host, port)
})
