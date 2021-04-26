const deviceModel = require('../model/deviceModel');

exports.insertDevice = function(req, res) {
    var value = {};
    if (req.body.deviceName == null || req.body.deviceName === "" ||
        req.body.deviceOwner == null || req.body.deviceOwner === "") {
        res.send("values not given");
    } else {
        value.deviceName = req.body.deviceName;
        value.deviceOwner = req.body.deviceOwner;

        deviceModel.insertDevice(value, function(err, result) {
            if (err) {

                res.send(err);
            } else {
                res.send(result);
            }
        });

    }
};

exports.deviceUsedFor = function(req, res) {
    var value = {};
    if (req.body.deviceId == null || req.body.deviceId === "" ||
        req.body.deviceUser == null || req.body.deviceUser === "") {
        res.send("values not given");
    } else {
        value.deviceId = req.body.deviceId;
        value.deviceUser = req.body.deviceUser;

        deviceModel.deviceUsedFor(value, function(err, result) {
            if (err) {

                res.send(err);
            } else {
                res.send(result);
            }
        });

    }
};

exports.deviceCheckForAdmin = function(req, res) {
    var value = {};
    if (req.body.adminUserId == null || req.body.adminUserId === "") {
        res.send("values not given");
    } else {
        value.adminUserId = req.body.adminUserId;

        deviceModel.deviceCheck(value, function(err, result) {
            if (err) {

                res.send(err);
            } else {
                res.send(result);
            }
        });

    }
};