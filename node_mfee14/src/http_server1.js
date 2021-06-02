// https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_writehead_statuscode_statusmessage_headers

// const server = http.createServer(requestListener: (req: http.IncomingMessage, res: ServerResponse) => {
//   res.writeHead(statusCode: 200, headers:{
//     'Content-Type' : 'text/html'
//   }); //狀態 和 檔頭
//   res.end(`chunk:
//   <h2>Hola</h2>
//   <p>${req.url}</p>`
//     ) //url
// });

// 作者:黃薇捷
// server.listen(prot: 3000);  //3000~5000 不要1024以下

//執行機器碼，已經和原始碼脫離關係，所以必須重新啟動terminal
//可用nodemon來解決這個不方便的動作，用nodemon來啟動node

// 程式會跟作業系統註冊port num
// 用法是先佔先贏，被用走的就不能用
// 1024以下會有既定的通訊協定在用
// mysql 3306
// 連到哪個port就會知道是哪個程式
//server: web, database ...
// port num: 像銀行特定承辦業務的窗口編號

// network
// 重新整理會有兩個檔案，點進去會看到headers...
// http 協定: 先有req 才有 res
//headers:
// request header  瀏覽器發出去的要求

const http = require("http"); //套件id

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.end(` 
    <h2>Hola</h2>
    <p>${req.url}</p>
    `);
});

server.listen(3001);
