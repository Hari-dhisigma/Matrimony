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
      let id = event.id;
      if (id == '') {
            callback(null, { status: 'error', "message": "id is empty" })
      }
      const sql = "SELECT id, txtProfileName, txtAge,txtHeight,txtMotherTongue,txtReligion,txtPlace,txtEducation,txtJob FROM tblUsers WHERE id='" + id + "';";
      connection.query(sql, function (err, result) {
            if (err) throw err;
            callback(null, { status: "success", value: result });

      });
};
