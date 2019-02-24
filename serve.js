var ws = require("nodejs-websocket");
var port = 9001;
var user = [];
var server = ws.createServer(function (conn) {
    console.log("conn");
    user.push(conn);
    conn.on("text",function (str) {
        for (var j = 0; j < user.length; j ++) {
            user[j].sendText(str);
        }
    });
    conn.on("close",function (code,reason) {
        console.log("connection closed");
    });
    conn.on("error",function (err) {
        console.log("handle err");
        console.log(err);
    });
}).listen(port);