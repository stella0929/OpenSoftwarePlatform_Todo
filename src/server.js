const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // << 새로 추가된 부분

var connection = mysql.createConnection({
  /// 새로 추가된 부분
  host: "localhost",
  user: "team14", // mysql에 아이디를 넣는다.
  password: "team14", // mysql의 비밀번호를 넣는다.
  database: "todo_db", //위에서 만든 데이터베이스의 이름을 넣는다.
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const userId = req.body.userId;
  const userPassword = req.body.userPassword;
  connection.query("SELECT *FROM user WHERE id=? AND password=SHA1(UNHEX(SHA1(?)))",[userId, userPassword],function(err,data){
    if(data.length ==0){
      res.send({
        success: 0
     });
    }
    else{
      res.send({
        success: 1
     });
    }
  });
});

app.post("/signup", (req, res) => {
  const userName = req.body.userName;
  const userId = req.body.userId;
  const userPassword = req.body.userPassword;
  
  connection.query("SELECT *FROM user WHERE id=?",[userId],function(err,data){
    if(data.length ==0){
      connection.query("INSERT INTO user (id, password, name) values(?,SHA1(UNHEX(SHA1(?))),?);", [userId,userPassword,userName]),
      function (err, rows, fields) {}
      res.send({
        success: 1
     });
    }
    else{
      res.send({
        success: 0
     });
    }
  })

  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});