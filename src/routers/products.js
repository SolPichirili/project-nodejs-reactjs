import express from "express";
import { getAllProducts, getProductById, getProductsByCategory, saveNewProduct, updateProduct, deleteProductById } from '../controllers/products.js';
import isAdmin from "../middlewares/isAdmin.js";

const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProductById);
productsRouter.get('/categories/:category', getProductsByCategory);
productsRouter.post('/', isAdmin, saveNewProduct);
productsRouter.put('/:id', isAdmin, updateProduct);
productsRouter.delete('/:id', isAdmin, deleteProductById);

export default productsRouter;