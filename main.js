const http = require('http')
// console.log(http)
// http변수에 http모듈을 가져오는 것을 변수로 저장
const server = http.createServer(function(request, response) {
  if(request.url === "/") {
    let doc = 
    `<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/sub">main</a>
    </body>
    </html>`
    response.writeHead(200,{"Content-Type" : "text/html"})
    response.end(doc)
  }
  if(request.url === "/sub") {
    let doc =`<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/">sub</a>
    </body>
    </html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(doc);
  }
}).listen(5800)