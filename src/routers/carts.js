import express from "express";
import { getAllCarts, getCartById, saveNewCart, addProductById, updateCart, deleteCartById, deleteProductFromCart } from '../controllers/carts.js';
import isAdmin from "../middlewares/isAdmin.js";

const cartsRouter = express.Router();

cartsRouter.get('/', getAllCarts);
cartsRouter.get('/:id', getCartById);
cartsRouter.post('/', saveNewCart);
cartsRouter.post('/:id', addProductById);

export default cartsRouter;