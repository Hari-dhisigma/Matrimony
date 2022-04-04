
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "matrimony.c56ayiprrn3s.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "matrimony"
});
connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected...");
  }
  else {
    console.log("Error connecting database...");
  }
});

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  let uname = event.txtUserName;
  if (uname == '') {
    callback(null, { status: 'error', "message": "username is empty" });
    return;
  }

  let password = event.txtPassword;
  if (password == '') {
    callback(null, { status: 'error', "message": "password is empty" });
    return;
  }


  const sql = "INSERT INTO tblUsers (txtUserName,txtPassword) VALUES ('" + uname + "','" + password + "');"
  connection.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, { status: "success", value: result });

  });
};



