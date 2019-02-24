var ws = require("nodejs-websocket");
var user = [];
ws.createServer(function (conn) {
  user.push(conn);
  conn.on("text",function (str) {
    for (var i = 0; i < user.length; i ++) {
      user[i].sendText(str);
    }
  });
  conn.on("close",function (code,res) {
    console.log("conn close");
  });
  conn.on("error",function (err) {
    console.log(err);
  });
}).listen(9001);
