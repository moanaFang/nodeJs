require('dotenv').config(); //找.env的檔案

const {MY_USER, MY_DBNAME} = process.env;

console.log({MY_USER, MY_DBNAME});