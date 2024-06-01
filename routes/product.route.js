const express = require("express");
const route = express.Router();
const {GetAllProducts,SingleProduct,UpdateProduct,DeleteProduct,CreateProduct} = require('../controllers/product.controllers')

//Get all products
route.get("/",GetAllProducts)

//Get single product
route.get("/:id",SingleProduct )

//update 
route.put("/:id",UpdateProduct )

//Delete
route.delete("/:id",DeleteProduct)

//Post
route.post("/",CreateProduct);

module.exports = route;