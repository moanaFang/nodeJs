/*參考網站
body-parser: https://www.npmjs.com/package/body-parser
urlencoded true : https://segmentfault.com/a/1190000004407008
*/

/*npm網站
body-parser
  body http的主體內容
  parser 
  解析器 http document 的 body。
  body-parsor 看檔頭是不是自己要的類型，處理from的entype的application...。

middleware
  client 發送 request, 會有檔頭、主體，在進到路由比對符合哪個路由，
  比對到，再進到路由的callback function前，會先經過middleware，
  middleware 做處理，處理head、body的資料，body-parser 處理 http 的 body，
  處理好，塞到req物件的body裡面。
*/

/*form
enctype
multipart/form-data 上傳檔案
 */

/*型別判斷
    typeof
      object
        typeof {}
        typeof []
        typeof null
        typeof document
      undefined
        typeof undefined

    instanceof 比較兩者
      {} instanceof Function
      obj instanceof Object
    
    .constructor.name
      let f = a => a*a
      f..constructor.name 'Function'

    function 參照
      let f = a => a*a;
      let f2 = function(a) {return a*a}
      typeof f
      typeof f2

    function特殊物件
      f2.f3 = a => a*a*a
      f2(6)
      f2.f3(2)
    array
      let ar = []
      ar[-2] = 23
      ar.name = 'bill'
      ar['aa'] = 55
      ar[7] = 12
      ar.length 索引長度，不是元素的總數
*/