const mongoose = require("mongoose");
const order = require("../../modals/orders");
const product = require("../../modals/product");
module.exports = {

    // tested
    // to update the limit of orders of each product
    async updateproductQuantity(productId, quantity, flag) {
        // console.log("checlimit>>",productId, quantity, flag)
        try {
            let data = (await product.find({ _id: productId }).limit(1))[0];
            if (flag == 1) {
                data.quantityAvailable -= quantity;
            }
            else {
                data.quantityAvailable += quantity;
                // console.log("reverted order quantity")
            }
            await data.save();
            return data.quantityAvailable;
        }
        catch (e) {
            return ("error", e);
        }

    },

    // to check the availability of product
    // tested
    async checkProductQuantity(productId, quantity) {
        try {
            console.log("in checklimit >> productId>> ", productId, ">>quantity required>>", quantity)
            var data = await product.find({ _id: productId });
            console.log("in checklimit >>", data[0].quantityAvailable)
            if (data[0].quantityAvailable >= quantity)
                return true;
            else
                return false;
        }
        catch (e) {
            return false;
        }
    }
}