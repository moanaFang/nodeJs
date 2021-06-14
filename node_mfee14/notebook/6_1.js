/*
jQuery.ajax: https://api.jquery.com/jquery.ajax/
XMLHttpRequest: https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
jquery ajax file upload: https://stackoverflow.com/questions/2320069/jquery-ajax-file-upload

最早IE5.5有XMLHttpRequest功能，可以在背景發request，使用XML格式做資料交換 
使用ajax上傳資料
formData 沒有外觀的表單資料

Uncaught TypeError Illegal invocation: https://www.itread01.com/content/1548568112.html
Function.prototype.bind(): https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

箭頭函式不能改this，傳統的function可以

req.url 拿到路徑
req.headers 拿到解析過的物件
req.query 拿到query string, get 參數
req.body 表單文字欄位, post參數
req.params 路由上面代稱

檔頭都送出去了
res.end() 資料送完就結束
res.send() 傳送資料，如果是文字資料，會直接在擋頭上加文字資料
res.render() 把樣板轉成html，丟一些變數資料給樣板

這四個在路由的callback function裡面，在一個條件之下，只能呼叫一次，否則會出現錯誤。
可以寫好幾個，用if/else判斷不同的情況，呼叫不同的東西，回傳給用戶端不同的內容res.json() 會設定檔頭，檔頭告訴客戶端我現在類型是application/json。
*/