var validator = require("email-validator");
const loginModel = require('../model/loginModel');

exports.login = function(req, res) {
    var value = {};
    if (req.body.email == null || req.body.email === "" || req.body.password == null || req.body.password === "") {
        res.send("eamil or password not given");
    } else {
        value.emailVarify = validator.validate(req.body.email);
        if (value.emailVarify == true) {
            value.email = req.body.email;
            value.password = req.body.password;
            if (req.body.adminCheck) {
                if (req.body.adminCheck == true) {
                    loginModel.loginAsAdmin(value, function(err, result) {
                        if (err) {

                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                } else {
                    loginModel.loginAsUser(value, function(err, result) {
                        if (err) {

                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                }
            } else {
                loginModel.loginAsUser(value, function(err, result) {
                    if (err) {

                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
            }
        } else {
            res.send("email not varified");
        }
    }
};