
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    //const text = fs.readFileSync('./writefile.txt', 'utf-8');
    //res.end(text);

    const stream = fs.createReadStream('./writefile.txt', { encoding: 'utf-8' });

    stream.on('open', () => {
        stream.pipe(res);
    });

    stream.on('error', (err) => {
        res.end(err.message);
    });

}).listen(5000);
