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
      const sql = "SELECT id,txtUserName,txtAge,txtHeight,txtEducation,txtPlace FROM tblUsers;";
      connection.query(sql, function (err, result) {
            if (err) throw err;
            callback(null, { status: "success", value: result });

      });
};



