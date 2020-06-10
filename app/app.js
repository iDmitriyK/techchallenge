const http = require('http');
http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    switch(request.url) {
        case '/will':
            response.write("{data: 'Hello World'}");
            break;
        case '/ready':
            response.write("{data: 'It works!'}");
            break;
        default:
            response.write("<h2>404 Not faund</h2>")
    }
    response.end();
}).listen(3000);
