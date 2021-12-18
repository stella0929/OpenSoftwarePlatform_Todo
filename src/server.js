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
        success: 1,
        level: data[0].level
     });
    }
  });
});
app.post("/levelup", (req, res) => {
    const id = req.body.ID; // levelup 호출시 AsyncStorage에 있는 id값 넣어줘야함
    connection.query("UPDATE user set level = level+1 WHERE id=?",[id],function(err,data){
      if(err){
        console.log(err);
      } else {
        res.send({
          success: 1 // level up 해준뒤에 AsyncStorage에 있는 level값 +1 해줘야함. 
          //아래 주석처리 해놓은 getlevel통해 가져올 수있지만 db접근하는것 보다 local storage로 관리하는게 더 낫다고 생각함.
       });// level을 db에서 계속 가져와서 업데이트 해주는것보다 db는 levelup할때와 로그인시에만 접근하게 구성함.
       // 보통은 AsyncStorage에서 읽어와서 사용자 보여줌.
      }
  });
});
/*
app.post("/getlevel", (req, res) => {
  const id = req.body.id; // getlevel 호출시 AsyncStorage에 있는 id값 넣어줘야함
  connection.query("SELECT level FROM user WHERE id=?",[id],function(err,data){
    if(err){
      console.log(err);
    } else {
      res.send({
        level: data[0]
     });
    }
});
});*/
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