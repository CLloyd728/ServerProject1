var express = require('express'); // requre the express framework
var app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
)
//the function for when a put request is made flips all of the text as of now including the formating
app.put('/', (req, res) => {
    res.end("Test")
    var str = JSON.stringify(req.body)
    console.log(str)
    var stringar = str.split("")
    var reversear = stringar.reverse()
    str = reversear.join("")
    console.log(str)
    return str
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
    console.log("ServerProject1 listening at http://%s", port)
})
