const mongoose = require("mongoose");
const buyer = require("../../modals/buyer");

module.exports = {

    // teested
    async createNewBuyer(req, res) {
        var newUser = new buyer(req.body);
        newUser.save()
            .then((data) => {
                res.json(data.name);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    // tested
    async getBuyer(req, res) {
        var ip = req.UserHostAddress;
        buyer.findOne({ email: req.body.email})
            .exec(function (err, data) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(data);
                }
            })
    }

}
