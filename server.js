'use strict';

const http = require('http'); // запомнить require
const fs = require('fs'); // это позволяет читать файлы

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
     if (request.url === '/style.css') {
         const css = fs.readFileSync('style.css', 'utf8')
         response.end(css);
     } else {
         const html = fs.readFileSync('index.html', 'utf8');
         response.end(html);
     }
});

console.log('port =', process.env.PORT); // переменная окружения

server.listen(process.env.PORT || 3000);
console.log('Сервер пашет');