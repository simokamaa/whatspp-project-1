const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const fs = require('fs');

const server = http.createServer(req, res) => {
    fs.readFile('index.html', 'utf8', function(err, data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    });
}
sever.listen(port, hostname, () => {
    console.log('listening on port //${hostname} & ${port}');
});