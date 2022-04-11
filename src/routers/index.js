import express from "express";
import productsRouter from "./products.js";
import cartsRouter from "./carts.js";

const router = express.Router();

router.use('/products', productsRouter);
router.use('/cart', cartsRouter);

export default router;