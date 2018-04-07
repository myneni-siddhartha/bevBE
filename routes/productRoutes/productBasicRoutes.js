const express=require("express");
const router=express.Router();
const productController = require("../../controllers/product/product")


router.post("/newProduct",productController.createNewproduct);
router.get("/getAllProducts",productController.getAllProducts);
router.get("/getProduct/:id",productController.getProduct);
// router.put("/updateDFQ",productController.updateProductQuantity);






module.exports=router;