//express文件: http://expressjs.com/en/4x/api.html#app

require("dotenv").config();

const port = process.env.port || 3000;

const { urlencoded } = require("express");
const express = require("express");

/*----------------------------------------*/
// const multer = require('multer');
// const upload = multer({dest:'tmp_uploads/'}); //設定上傳暫存目錄
// const {v4: uuidv4} = require('uuid'); //將v4物件的名稱改為uuidv4 

const upload = require(__dirname + '/modules/upload-img'); //透過upload呼叫single、array...

/*----------------------------------------*/

const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

// urlencoded處理form enctype application/x-www-form-urlencoded，但multipart/form-data則不行

const urlencodeedParser = express.urlencoded({extended: false}); //middleware 中介軟體。false，querystring
// app.use(express.urlencoded({extended: false}));  // middleware // 中介軟體
app.use(express.json()); 

// node express 先定義的優先。每定義一個路由，push到陣列。比對路由，從前面開始比對。

// 路由定義:開始

// 靜態內容，如css、圖、不會變動的html、前端javascript
// server端完全不會做修改，直接送給用戶端
// server端的render，會將用戶端要的html生出來，ex:PHP
// app.use(express.static('public')); //啟動路徑改變，會找不到
app.use(express.static(__dirname + "/../public"));

// app.get("/abc/def", (req, res) => {
//     res.render('home', {name:'Moana'})
// });

app.get("/", (req, res) => {
    res.render('home', {name:'Moana'})
});

app.get('/json-test',(req,res) => {
    const d = require(__dirname + '/../data/sales');
    // res.json(d);
    // res.json({say:'hi'});
    res.render('json-test',{sales: d})
});

app.get('/try-qs', (req, res) => {
    res.json(req.query); //json格式輸出
});

// const urlencodeedParser = express.urlencoded({extended: false}); //middleware 中介軟體。false，querystring
app.post('/try-post', urlencodeedParser, (req, res) => {
    res.json(req.body); //req沒有body的屬性，它來自middleware
});

app.get('/try-post-from',(req,res) => {
    res.render('try-post-from', {email:'', password:''});
});

app.post('/try-post-from', urlencodeedParser, (req, res) => {
    // res.json(req.body);
    res.render('try-post-from', req.body);
});

app.get('/try-upload', (req,res) => {
    res.render('try-upload');
})

// const extMap = {
//     'image/png' : '.png',
//     'image/jpeg' : '.jpg',
// };

// 單一檔案上傳avatar欄位
// app.post('/try-upload', upload.single('avatar'), async (req, res)=>{
//     console.log(req.file);

//     // let newName = '';
//     // if(extMap[req.file.mimetype]){
//     //     newName = uuidv4() + extMap[req.file.mimetype];
//     //     await fs.promises.rename(req.file.path, './public/img/' + newName);
//     // }

//     res.json({
//         filename: req.file,
//         body: req.body
//     });
// });

app.post('/try-upload', upload.single('avatar'), async (req, res)=>{
    console.log(req.file);

    // let newName = '';
    // if(extMap[req.file.mimetype]){
    //     newName = uuidv4() + extMap[req.file.mimetype];
    //     await fs.promises.rename(req.file.path, './public/img/' + newName);
    // }

    res.json({
        filename: req.file && req.file.filename, //短路求值，錯誤先行
        body: req.body
    });
});

// 多個檔案上傳avatar欄位
app.post('/try-uploads', upload.array('photo'), (req,res) => {
    console.log(req.files);
    // res.json(req.file);
    res.json({
        file: req.files,
        body: req.body
    })
});

app.get('/pending', (req, res) => {

})

// action、id是代稱

// 不會有頁面，因為路由分3段，用2段會找不到頁面
// 3段，http://localhost:3001/my-params1/edit/15，edit字串放到action，15字串放到id
// 2段，http://localhost:3001/my-params1/edit
// 路由是代稱的話，會去解析
// app.get('/my-params1/:action/:id', (req, res) => {
//     res.json(req.params)
// })

// 加?問號表示可有可無
// 3段，http://localhost:3001/my-params1/edit/456
// 4段，http://localhost:3001/my-params1/edit/456/7 找不到頁面
// app.get('/my-params1/:action?/:id?', (req, res) => {
//     res.json(req.paramas)
// })

// *沒有變數名稱，拿到的會是array，此外，它也容易搞混，可以:代稱
app.get('/my-params1/*/*?', (req, res) => {
    res.json(req.params)
})

// '/my-params1/hello'，這個路由要放在/my-params1前面，不然會被擋到
// 越特殊的放越前面，越寬鬆的放越後面(很多路由都會符合)
// 要符合定義的路由，多一段或少一段，都不行



// network 有 request headers，沒有 response headers,伺服器還沒回應。
// 瀏覽器timeout才會回應或是斷線。
// 客戶端有連到server端，server端一直沒有回應。客戶端收不到資料。
app.get('/pending',(req,res) => {
//   res.render('try-upload');
});

// app.get("/", (req, res) => {
//     res.render('home', {name: 'moana'})
// });

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
