var validator = require("email-validator");
const registrationModel = require('../model/registrationModel');

exports.userRegistration = function(req, res) {
    var value = {};
    if (req.body.email == null || req.body.email === "" ||
        req.body.password == null || req.body.password === "" ||
        req.body.name == null || req.body.name === "" ||
        req.body.phone == null || req.body.phone === "" ||
        req.body.registerBy == null || req.body.registerBy === "") {
        res.send("values not given");
    } else {
        value.emailVarify = validator.validate(req.body.email);
        if (value.emailVarify == true) {
            value.email = req.body.email;
            value.password = req.body.password;
            value.name = req.body.name;
            value.phone = req.body.phone;
            value.registerBy = req.body.registerBy;

            registrationModel.registrationAsUser(value, function(err, result) {
                if (err) {

                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        } else {
            res.send("email not varified");
        }
    }
};

exports.adminRegistration = function(req, res) {
    var value = {};
    if (req.body.email == null || req.body.email === "" ||
        req.body.password == null || req.body.password === "" ||
        req.body.name == null || req.body.name === "" ||
        req.body.phone == null || req.body.phone === "") {
        res.send("values not given");
    } else {
        value.emailVarify = validator.validate(req.body.email);
        if (value.emailVarify == true) {
            value.email = req.body.email;
            value.password = req.body.password;
            value.name = req.body.name;
            value.phone = req.body.phone;

            registrationModel.registrationAsAdmin(value, function(err, result) {
                if (err) {

                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        } else {
            res.send("email not varified");
        }
    }
};