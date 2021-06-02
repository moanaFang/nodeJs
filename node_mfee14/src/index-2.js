//express文件: http://expressjs.com/en/4x/api.html#app

require("dotenv").config();

const port = process.env.port || 3000;

const express = require("express");

const app = express();

// node express 先定義的優先。每定義一個路由，push到陣列。比對路由，從前面開始比對。

// 路由定義:開始

// 靜態內容，如css、圖、不會變動的html、前端javascript
// server端完全不會做修改，直接送給用戶端
// server端的render，會將用戶端要的html生出來，ex:PHP
// app.use(express.static('public')); //啟動路徑改變，會找不到
app.use(express.static(__dirname + "/../public"));

app.get("/", (req, res) => {
    res.send("Hello");
});

// 請注意順序

// app.get("/form01.html", (req, res) => {
//     res.send('fake html');
// });

// app.use(express.static('public'));


// 404 放在所有路由後面
// use 予許所有的http方法
app.use((req, res)=>{
    //回應給用戶的Content-type
    // res.type('text/plain');
    res.type('text/html'); 

    res.status(404).send('<h1>找不到頁面</h1>');
});

// 路由定義:結束

app.listen(port, () => {
    console.log(`server started: ${port}`);
});
