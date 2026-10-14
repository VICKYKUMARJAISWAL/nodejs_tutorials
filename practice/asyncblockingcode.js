const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        for(let i =0;i<1000;i++){
            for(let j =0;j<1000;j++){
                console.log(`${i} ${j}`);
            
        }

        }
        res.end("about page");
    }
    res.end('error page')
});

console.log('strating the next task');
server.listen(3000, () => {
    console.log('server listenning on port 3000');

})