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
    <a href="http://localhost:5800/hana">hyun</a>
    <a href="http://localhost:5800/hahyun">hana</a>
    <a href="http://localhost:5800/hamin">hahyun</a>
    <a href="http://localhost:5800/hyun">hamin</a>
    <style>
    let a = document.getElementsTagName("a")
    for(let i=0; i<a.length; a++) {
    a[i].Style.Color = "blue"
    }
    </style>
    </body>
    </html>`
    response.writeHead(200,{"Content-Type" : "text/html"})
    response.end(doc)
  }
  if(request.url === "/hyun") {
    let doc = 
    `<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/hana">hyun</a>
    </body>
    </html>`
    response.writeHead(200,{"Content-Type" : "text/html"})
    response.end(doc)
  }
  if(request.url === "/hana") {
    let doc =`<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/hahyun">hana</a>
    </body>
    </html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(doc);
  }
  if(request.url === "/hahyun") {
    let doc =`<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/hamin">hahyun</a>
    </body>
    </html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(doc)
  }
  if(request.url === "/hamin") {
    let doc =`<html>
    <head>
    </head>
    <body>
    <a href="http://localhost:5800/hyun">hamin</a>
    </body>
    </html>`
    response.writeHead(200, {"Content-Type" : "text/html"})
    response.end(doc)
  }
}).listen(5800)