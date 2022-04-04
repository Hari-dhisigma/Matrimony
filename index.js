const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "matrimony.c56ayiprrn3s.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "matrimony"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// API for user validation
app.get('/uservalidation', function (req, res) {

  let uname = req.body.txtUserName;
  if (uname == '') {
    res.send({ status: 'error', "message": "username is empty" })
    return;
  }

  let password = req.body.txtPassword;
  if (password == '') {
    res.send({ status: 'error', "message": "password is empty" })
    return;
  }

  con.query("SELECT txtUserName,txtPassword FROM tblUsers WHERE txtUserName ='" + uname + "' AND txtPassword ='" + password + "'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json({ status: 'success', values: result })
  });
});

//API for user insert
app.post('/userinsert', function (req, res) {

  let id = req.body.id;
  let uname = req.body.txtUserName;
  if (uname == '') {
    res.send({ status: 'error', "message": "username is empty" })
    return;
  }

  let password = req.body.txtPassword;
  if (password == '') {
    res.send({ status: 'error', "message": "password is empty" })
    return;
  }

  var sql = "INSERT INTO tblUsers (txtUserName,txtPassword) VALUES ('" + uname + "','" + password + "');"
  con.query(sql, function (err, result) {
    if (err)
      res.json({ status: 'error' })

    res.json({ status: 'success', values: result })
  });
});

// API for user update

app.patch('/userupdate', (req, res) => {

  let id = req.body.id;
  if (id == '') {
    res.send({ status: 'error', "message": "id is empty" })
    return;
  }

  let DateOfBirth = req.body.dDateOfBirth;
  let Religion = req.body.txtReligion;
  let MotherTongue = req.body.txtMotherTongue;
  let Email = req.body.txtEmail;
  var sql = "UPDATE tblUsers SET dDateOfBirth='" + DateOfBirth + "',txtReligion='" + Religion + "',txtMotherTongue='" + MotherTongue + "',txtEmail='" + Email + "' WHERE id='" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.json({ status: 'success', values: result })
  });
});

// API for fetching users
app.get('/userfetch', function (req, res) {
  con.query("SELECT id,txtUserName,txtAge,txtHeight,txtEducation,txtPlace FROM tblUsers;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json({ status: 'success', values: result })
  });
});

// Api for fetch user by id
app.get('/userfetchbyid', function (req, res) {

  let id = req.body.id;
  if (id == '') {
    res.send({ status: 'error', "message": "id is empty" })
    return;
  }

  con.query("SELECT id, txtProfileName, txtAge,txtHeight,txtMotherTongue,txtReligion,txtPlace,txtEducation,txtJob FROM tblUsers WHERE id='" + id + "'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json({ status: 'success', values: result })
  });
});


// Api for fetching profile
app.get('/profilefetch', function (req, res) {

  let id = req.body.id;
  if (id == '') {
    res.send({ status: 'error', "message": "id is empty" })
    return;
  }

  con.query("SELECT id,txtUserName,txtPassword,dDateOfBirth,txtReligion,txtMotherTongue,txtEmail,txtPlace,txtEducation,txtJob,txtDescription,txtProfileName,txtAge,txtHeight,txtWeight,txtMaritalStatus FROM tblUsers WHERE id='" + id + "'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json({ status: 'success', values: result })
  });
});


// API profile update
app.patch('/profileupdate', (req, res) => {

  let id = req.body.id;
  if (id == '') {
    res.send({ status: 'error', "message": "id is empty" })
    return;
  }

  let Place = req.body.txtPlace;
  let Education = req.body.txtEducation;
  let Job = req.body.txtJob;
  if (Job == '') {
    res.send({ status: 'error', "message": "Job is empty" })
    return;
  }

  let Description = req.body.txtDescription;
  let ProfileName = req.body.txtProfileName;
  if (ProfileName == '') {
    res.send({ status: 'error', "message": "ProfileName is empty" })
    return;
  }

  let Age = req.body.txtAge;
  let Height = req.body.txtHeight;
  let Weight = req.body.txtWeight;
  let MaritalStatus = req.body.txtMaritalStatus;

  var sql = "UPDATE tblUsers SET txtPlace='" + Place + "',txtEducation='" + Education + "',txtJob='" + Job + "',txtDescription='" + Description + "',txtProfileName='" + ProfileName + "',txtAge='" + Age + "',txtHeight='" + Height + "',txtWeight='" + Weight + "',txtMaritalStatus='" + MaritalStatus + "' WHERE id='" + id + "';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.json({ status: 'success', values: result })
  });
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});
module.exports = app;