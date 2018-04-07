const express=require("express");
const router=express.Router();
const orderController = require("../../controllers/order/order")


router.post("/newOrder",orderController.createNewOrder);
router.get("/getOrder/:id",orderController.getOrder);
router.post("/cancelOrder",orderController.cancelOrder);
router.get("/getSingleProductDetails/:productId",orderController.getAllOrdersOfSingleProduct)
// getAllOrdersOfSingleProduct


module.exports=router;