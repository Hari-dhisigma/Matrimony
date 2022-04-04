var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "matrimony.c56ayiprrn3s.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "matrimony",
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected...");
    } else {
        console.log("Error connecting database...");
    }
});

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let id = event.id;
    if (id == "") {
        callback(null, { status: "error", message: "id is empty" });
    }
    let Place = event.txtPlace;
    let Education = event.txtEducation;
    let Job = event.txtJob;
    if (Job == "") {
        callback(null, { status: "error", message: "Job is empty" });
    }
    let Description = event.txtDescription;
    let ProfileName = event.txtProfileName;
    if (ProfileName == "") {
        callback(null, { status: "error", message: "ProfileName is empty" });
    }
    let Age = event.txtAge;
    let Height = event.txtHeight;
    let Weight = event.txtWeight;
    let MaritalStatus = event.txtMaritalStatus;
    const sql =
        "UPDATE tblUsers SET txtPlace='" +
        Place +
        "',txtEducation='" +
        Education +
        "',txtJob='" +
        Job +
        "',txtDescription='" +
        Description +
        "',txtProfileName='" +
        ProfileName +
        "',txtAge='" +
        Age +
        "',txtHeight='" +
        Height +
        "',txtWeight='" +
        Weight +
        "',txtMaritalStatus='" +
        MaritalStatus +
        "' WHERE id='" +
        id +
        "';";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(null, { status: "success", value: result });
    });
};
