import PersistenceFactory from "../daos/index.js";
import options from "../config.js";
import logger from "../utils/winston.js";

const factory = PersistenceFactory.getInstance();
const CartsDao = factory.getPersistenceMethod(options.persistance).cartsDao;
const ProductsDao = factory.getPersistenceMethod(options.persistance).productsDao;

const getAllCarts = async (req, res) => {
    try {
        const carts = await CartsDao.getAll();
        res.send(carts);
    }
    catch (error) {
        logger.error(`ERROR: controller error (getAllCarts): ${error}`);
    }
}

const getCartById = async (req, res) => {
    try {
        const id = req.params.id;
        const cartById = await CartsDao.getById(id);

        if (!cartById) {
            res.send(`The product ${id} has not been found.`);
        }

        res.send(cartById);
    } catch (error) {
        logger.error(`ERROR: controller error (getCartById): ${error}`);
    }
}

const saveNewCart = async (req, res) => {
    try {
        const cart = req.body;
        const newList = await CartsDao.getNewId(cart);
        res.send(newList);
    } catch (error) {
        logger.error(`ERROR: controller error (saveNewCart): ${error}`);
    }
}

const addProductById = async (req, res) =>{
    try{
        const cartId = req.params.id;
        const productId = req.body;
        const product = await ProductsDao.getById(productId);

        if (!product){
            res.send(`The product ${productId} has not been found.`);
        }

        const cart = await CartsDao.addProductById(cartId, product);
        res.send(cart);
    }catch(error){
        logger.error(`ERROR: controller error (addProductById): ${error}`);
    }
}

const updateCart = async (req, res) => {
    try {
        const cartId = req.params.id;
        const newInfo = req.body;
        const newCart = await CartsDao.update(cartId, newInfo);

        if (!newCart) {
            res.send(`The product ${id} has not been found.`);
        }

        res.send(newCart);
    }
    catch (error) {
        logger.error(`ERROR: controller error (updateCart): ${error}`);
    }

}

const deleteCartById = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await CartsDao.deleteById(id);

        if (!cart) {
            res.send(`The product ${id} has not been found`);
        }

        res.send(`The product ${id} was erased.`);
    } catch (error) {
        logger.error(`ERROR: controller error (deleteCartById): ${error}`);
    }
}

const deleteProductFromCart = async (req, res) =>{
    try{
        const cartId = req.params.id;
        const productId = req.body;
        const deletedProduct = await CartsDao.deleteProductFromCart(cartId, productId);
        res.send(deletedProduct);
    }catch(error){
        logger.error(`ERROR: controller error (deleteProductFromCart): ${error}`);
    }
}

export { getAllCarts, getCartById, saveNewCart, addProductById, updateCart, deleteCartById, deleteProductFromCart };