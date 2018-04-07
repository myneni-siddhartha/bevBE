const express=require("express");
const router=express.Router();
const buyerController = require("../../controllers/buyer/buyer")


router.post("/newbuyer",buyerController.createNewBuyer);
router.put("/getBuyer",buyerController.getBuyer);



module.exports=router;