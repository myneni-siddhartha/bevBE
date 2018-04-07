const mongoose = require("mongoose");
const product = require("../../modals/product");

module.exports = {

    // tested>working
    async createNewproduct(req, res) {
        var newproduct = new product(req.body);
        newproduct.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    // tested>working    
    async getAllProducts(req, res) {
        product.find({})
            .exec(function (err, data) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(data);
                }
            })
    },

    // tested>working    
    async getProduct(req, res) {

        product.findOne({ _id: req.params.id })
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
