/*參考文件
jetbrains: https://www.jetbrains.com/webstorm/
*/

/*安裝node.js
下載
14-LTS 長期，優點: 漏洞少

使用 npm 建立專案套件管理檔案 package.json：
npm ini -y

查看 npm 版本:
npm -v

查看版本：
node --version

window cmd 開啟vscode:
在該檔案路徑下指令 code .

vscode cmd termial:
選termial上的加的Command Prompt

清除資訊
clear node
*/

/*套件安裝

es-checker
npm i -g es-checker
npm ls -g
es-checker
npm uninstall -g es-checker

pm2
npm i pm2 -g
npm ls
pm2 start
pm2 stop 0
pm2 del 0
*/

/*狀態碼
200 正常回應
1 正常
3 轉向/快取
4 用戶端的錯誤
5 500 Server壞掉
*/

/*port
多位使用者透過ip找到伺服器，伺服器有很多port，每個port都有它對應的服務。
建議不要低於1024，通常習慣 3000, 5000, 8000
80 http
443 https
3306 APPACH
*/

/*chrome 開發者工具 的 Network設定
打勾
Preserve log
Disable cache
*/

/*基礎觀念
1. clousure and 作用域
2. callback
3. callback hell
4. promise and then and catch
5. asyn and await
*/

/*非同步應用
定義: 事情交辦給他人，主程序繼續執行。

網路請求
計時器 setTimeOut
開檔讀檔
*/

/*Moana學習資源
youtube影片
(promise->callback->asyn和await)
https://www.youtube.com/watch?v=CTChl_DYTz0&t=1s

https://www.youtube.com/watch?v=NOprCnnjHm0

網路文章
https://realdennis.medium.com/callback-hell-%E8%88%87-promise-%E4%B8%80%E8%B5%B7%E4%BE%86%E6%8A%8A-settimeout-%E5%B0%81%E8%A3%9D%E6%88%90-promise-%E5%90%A7-e542ef84967f
https://cythilya.github.io/2018/10/30/callback/
https://blog.avenuecode.com/callback-hell-promises-and-async/await

書籍
JavaScript 學習手冊 (犀牛圖片)
*/