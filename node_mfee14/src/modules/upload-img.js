const multer = require('multer');
const {v4: uuidv4} = require('uuid');

// 篩選檔案格式
const extMap = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/webp': '.webp',
  'image/gif': '.gif'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    //null，錯誤先行，需額外做錯誤處理
    // __dirname + '/../../public/img，以目前js所在位置為參考位置
    // __dirname，位置明確，沒有使用，檔案搬動，啟動時會有問題 
    cb(null, __dirname + '/../../public/img'); 
  },
  filename: (req, file, cb) => {
    let ext = extMap[file.mimetype];
    cb(null, uuidv4() + ext);
  }
});

const fileFilter = (req, file, cb) => {
  cb(null, !!extMap[file.mimetype]); //!! 轉boolean值
}

module.exports = multer({storage, fileFilter});