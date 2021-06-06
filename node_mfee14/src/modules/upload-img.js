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
    cb(null, __dirname + '/../../public/img'); //null，錯誤先行，需額外做錯誤處理
  },
  filename: (req, file, cb) => {
    let ext = extMap[file.mimetype];
    cb(null, uuidv4() + ext);
  }
});

const fileFilter = (req, file, cb) => {
  cb(null, !!extMap[file.mimetype]); //!! 轉boolean值
}