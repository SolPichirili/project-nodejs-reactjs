import PersistenceFactory from "../daos/index.js";
import options from "../config.js";
import logger from "../utils/winston.js";

const factory = PersistenceFactory.getInstance();
const ProductsDao = factory.getPersistenceMethod(options.persistance).productsDao;

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsDao.getAll();
        res.send(products);
    }
    catch (error) {
        logger.error(`ERROR: controller error (getAllProducts): ${error}`);
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const productById = await ProductsDao.getById(id);

        if (!productById) {
            res.send(`The product ${id} has not been found.`);
        }

        res.send(productById);
    } catch (error) {
        logger.error(`ERROR: controller error (getProductById): ${error}`);
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const productsByCat = await ProductsDao.getByCategory(category);

        if (!productsByCat) {
            res.send(`There are not products in this category ${category}`);
        }

        res.send(productsByCat);
    } catch (error) {
        logger.error(`ERROR: controller error (geyProductsByCategory): ${error}`);
    }
}

const saveNewProduct = async (req, res) => {
    try {
        const product = req.body;
        const newList = await ProductsDao.save(product);
        res.send(newList);
    } catch (error) {
        logger.error(`ERROR: controller error (saveNewProduct): ${error}`);
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const newInfo = req.body;
        const newProduct = await ProductsDao.update(productId, newInfo);

        if (!newProduct) {
            res.send(`The product ${id} has not been found.`);
        }

        res.send(newProduct);
    }
    catch (error) {
        logger.error(`ERROR: controller error (updateProduct): ${error}`);
    }

}

const deleteProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductsDao.deleteById(id);

        if (!product) {
            res.send(`The product ${id} has not been found`);
        }

        res.send(`The product ${id} was erased.`);
    } catch (error) {
        logger.error(`ERROR: controller error (deleteProductById): ${error}`);
    }
}

export { getAllProducts, getProductById, getProductsByCategory, saveNewProduct, updateProduct, deleteProductById };