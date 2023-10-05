const http = require('http');

const server = http.createServer(function(request, response) {
    // console.log(request);
    console.log(typeof(response));
    response.writeHead(200, {"Content-Type": "text/html"});

    let doc = '<html> <head> </head> <body><h1> hello </h1> </body></html>'
    response.end(doc);
});
// 쓰다보니 객체더라
server.listen(1234);
