const request = require('supertest');
const app = require("./index");

//user validation
describe("testing user validation", () => {
    test("test with username and password inserted", (done) => {
        request(app)
            .get("/uservalidation")
            .send({
                "txtUserName": "arun",
                "txtPassword": "123",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "success",
                    "values": [
                        {
                            "txtUserName": "arun",
                            "txtPassword": "123"
                        }
                    ]
                }));
                done();
            });
    });
});


describe("testing user validation", () => {
    test("test with username empty", (done) => {
        request(app)
            .get("/uservalidation")
            .send({
                "txtUserName": "",
                "txtPassword": "123",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "username is empty"
                }));
                done();
            });
    });
});


describe("testing user validation", () => {
    test("test with password empty", (done) => {
        request(app)
            .get("/uservalidation")
            .send({
                "txtUserName": "arun",
                "txtPassword": "",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "password is empty"
                }));
                done();
            });
    });
});


//user insert
describe("testing user insert", () => {
    test("test with username and password inserted", (done) => {
        request(app)
            .post("/userinsert")
            .send({
                "txtUserName": "ajay",
                "txtPassword": "123",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "success",
                    "values": {
                        "fieldCount": 0,
                        "affectedRows": 1,
                        "insertId": 17,
                        "serverStatus": 2,
                        "warningCount": 2,
                        "message": "",
                        "protocol41": true,
                        "changedRows": 0
                    }
                }));
                done();
            });
    });
});

describe("testing user validation", () => {
    test("test with username empty", (done) => {
        request(app)
            .post("/userinsert")
            .send({
                "txtUserName": "",
                "txtPassword": "123",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "username is empty"
                }));
                done();
            });
    });
});

describe("testing user insert", () => {
    test("test with password empty", (done) => {
        request(app)
            .post("/userinsert")
            .send({
                "txtUserName": "ajay",
                "txtPassword": "",
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "password is empty"
                }));
                done();
            });
    });
});


// API for user update
describe("testing user update", () => {
    test("test with id empty", (done) => {
        request(app)
            .patch("/profileupdate")
            .send({
                "id": "",
                "txtPlace": "muvattupuzha",
                "txtEducation": "btech",
                "txtJob": "software engineer",
                "txtDescription": "abcd",
                "txtProfileName": "ajay kr",
                "txtAge": "24",
                "txtHeight": "170",
                "txtWeight": "60",
                "txtMaritalStatus": "single"
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "id is empty"
                }));
                done();
            });
    });
});


//userfetch
describe("testing user fetch", () => {
    test("test with every user fetched", (done) => {
        request(app)
            .get("/userfetch")
            .send({
                "task": "userfetch"
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "success",
                    "values": [
                        {
                            "id": 1,
                            "txtUserName": "arun",
                            "txtAge": "24",
                            "txtHeight": "170",
                            "txtEducation": "bcom",
                            "txtPlace": "kaloor"
                        },
                        {
                            "id": 17,
                            "txtUserName": "ajay",
                            "txtAge": null,
                            "txtHeight": null,
                            "txtEducation": null,
                            "txtPlace": null
                        }
                    ]
                }));
                done();
            });
    });
});


//userfetchbyid
describe("testing user fetch by id", () => {
    test("test with id empty", (done) => {
        request(app)
            .get("/userfetchbyid")
            .send({
                "id": ""
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "id is empty"
                }));
                done();
            });
    });
});


//profilefetch
describe("testing profile fetch", () => {
    test("test with id empty", (done) => {
        request(app)
            .get("/profilefetch")
            .send({
                "id": ""
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "id is empty"
                }));
                done();
            });
    });
});


// API profile update
describe("testing profile update", () => {
    test("test with id empty", (done) => {
        request(app)
            .patch("/profileupdate")
            .send({
                "id": "",
                "txtPlace": "muvattupuzha",
                "txtEducation": "btech",
                "txtJob": "software engineer",
                "txtDescription": "abcd",
                "txtProfileName": "ajay kr",
                "txtAge": "24",
                "txtHeight": "170",
                "txtWeight": "60",
                "txtMaritalStatus": "single"
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "id is empty"
                }));
                done();
            });
    });
});

describe("testing profile update", () => {
    test("test with job empty", (done) => {
        request(app)
            .patch("/profileupdate")
            .send({
                "id": 23,
                "txtPlace": "muvattupuzha",
                "txtEducation": "btech",
                "txtJob": "",
                "txtDescription": "abcd",
                "txtProfileName": "ajay kr",
                "txtAge": "24",
                "txtHeight": "170",
                "txtWeight": "60",
                "txtMaritalStatus": "single"
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({ status: 'error', "message": "Job is empty" }));
                done();
            });
    });
});

describe("testing profile update", () => {
    test("test with profile name empty", (done) => {
        request(app)
            .patch("/profileupdate")
            .send({
                "id": 23,
                "txtPlace": "muvattupuzha",
                "txtEducation": "btech",
                "txtJob": "software engineer",
                "txtDescription": "abcd",
                "txtProfileName": "",
                "txtAge": "24",
                "txtHeight": "170",
                "txtWeight": "60",
                "txtMaritalStatus": "single"
            })
            .then((response) => {
                expect(JSON.stringify(response.body)).toBe(JSON.stringify({
                    "status": "error",
                    "message": "ProfileName is empty"
                }));
                done();
            });
    });
});
