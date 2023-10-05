const http = require('http');
const server = http.createServer(function (request, response) {
    // console.log(request.url);
    if (request.url === "/") {
        let doc =
            `<html>
            <head>
            </head>
            <body>
            <a href="http://localhost:8080/sub">main</a>
            </body>
            </html>`
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(doc);
    }
    if (request.url === "/sub") {
        let doc =
        `<html>
        <head>
        </head>
        <body>
        <a href="http://localhost:8080/">sub</a>
        </body>
        </html>`
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(doc);

    }
    // console.log(typeof(response));
});
// 쓰다보니 객체더라
// 오타의 문제 "" 과 “”(글을 복사해온것)의 차이
server.listen(8080);
