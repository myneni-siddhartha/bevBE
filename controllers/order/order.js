const mongoose = require("mongoose");
const order = require("../../modals/orders");
const checkLimit = require('./checkLimits');
module.exports = {

    // tested
    async createNewOrder(req, res) {
        try {
            // console.log(req.body.product, req.body.quantity)
            var totalQuanntityAfterNewOrder = await checkLimit.checkProductQuantity(req.body.product, req.body.quantity)
            // console.log("can add new order:", totalQuanntityAfterNewOrder)
            if (totalQuanntityAfterNewOrder) {
                await checkLimit.updateproductQuantity(req.body.product, req.body.quantity, 1)
                var neworder = new order(req.body);
                neworder.save()
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.json(err);
                    })
            }
            else {
                res.json("requested quantity is not available on this day")
            }

        }
        catch (e) {
            res.json(e)
        }
    },

    // tested
    async getOrder(req, res) {
        try {
            var data = await order.findOne({ _id: req.params.id })
            res.json(data)
        }
        catch (e) {
            res.json("error in excicuting code", e)
        }
    },

    // tested
    async getAllOrdersOfSingleProduct(req,res){
        try{
            var data = await order.find({product:req.params.productId})
            res.json(data)
        }
        catch(e) {
            res.json(e)
        }
    },

    // tested
    async cancelOrder(req, res) {
        console.log("here")
        try {
            var change = await order.findOneAndUpdate({ _id: req.body.id,orderStatus:'Confirmed' }, { $set: { 'orderStatus': "Canceled" } });
            // console.log(change)
            checkLimit.updateproductQuantity(change.product, change.quantity, 0);
            res.json(1)
            
        }
        catch (e) {
            res.json( e)
        }
    }

}