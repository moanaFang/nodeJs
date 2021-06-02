// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(requestListener:(req:IncomingMessage, res:ServerResponse) => {
//   fs.writeFile(
//     path:__dirname + '/headers01.txt',
//     JSON.stringify(req.headers),
//     callback:error => {
//       if (error) {
//         res.end(error);
//       } else {
//         res.end('ok');
//       }
//     }
//   );
// });

// server.listen(3000);

// 注意非同步問題
// 同步的API後面會有Sync(python PHP都是同步，都有多執行緒)
// 我們使用非同步的API，才能避免卡住的問題
const http = require('http'),
        fs  = require('fs');

const server = http.createServer(async (req, res)=>{
    try {
        await fs.promises.writeFile(__dirname + '\\headers02.txt', JSON.stringify(req.headers));
        res.end('ok');
    } catch(ex) {
        res.end('error' + ex);
    }
});

server.listen(3001); 