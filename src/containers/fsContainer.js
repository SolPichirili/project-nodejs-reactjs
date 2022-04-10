import fs from 'fs';
import logger from '../utils/winston.js';

class FsContainer {
    constructor(file) {
        this.file = file
    }

    async save(element) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');

            let elements = [];

            if (content === '') {
                element.id = String(1);
                element.timeStamp = Date.now();
                elements.push(element);
            } else {
                const list = JSON.parse(content)

                element.id = String(list.length + 1);
                element.timestamp = Date.now;
                list.push(element);
                elements = list;
            }

            const listString = JSON.stringify(elements, null, 2);
            await fs.promises.writeFile(this.file, listString);
            return elements;
        } catch (error) {
            logger.error(`ERROR: container error (save): ${error}`);
        }
    }

    async getAll() {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            return list;
        } catch (error) {
            logger.error(`ERROR: container error (getAll): ${error}`);
        }
    }

    async getById(id) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const elementList = list.find(e => e._id === id);
            return elementList;
        } catch (error) {
            logger.error(`ERROR: container error (getById): ${error}`);
        }
    }

    async getNewId(element) {
        try {
            await this.save(element);
            return element._id;

        } catch (error) {
            logger.error(`ERROR: container error (getNewId): ${error}`);
        }
    }

    async update(id, object) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const element = await this.getById(id);
            const indexOfElement = list.findIndex(e => e._id === id);

            const updatedList = {
                ...element,
                ...object
            };

            list[indexOfElement] = updatedList;
            const listString = JSON.stringify(list, null, 2);
            await fs.promises.writeFile(this.file, listString);
            return updatedList;
        } catch (error) {
            logger.error(`ERROR: container error (update): ${error}`);
        }
    }

    async deleteById(id) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const indexOfElement = list.findIndex(e => e._id === id);
            list.splice(indexOfElement, 1);
            const listString = JSON.stringify(list, null, 2);
            await fs.promises.writeFile(this.file, listString);
            return list;
        } catch (error) {
            logger.error(`ERROR: container error (deleteById): ${error}`);
        }
    }

    async findUser(email) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const elementList = list.find(e => e.email === email);
            return elementList;
        } catch (error) {
            logger.error(`ERROR: container error (findUser): ${error}`);
        }
    }

    async getByCategory(category) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const newList = list.filter(e => e.category === category);
            return newList;
        } catch (error) {
            logger.error(`ERROR: container error (getByCategory): ${error}`);
        }
    }

    async getByEmail(email) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const newList = list.filter(e => e.email === email);
            return newList;
        } catch (error) {
            logger.error(`ERROR: container error (getByEmail): ${error}`);
        }
    }

    async addProductById(cartId, product) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const cart = list.find(c => c._id === cartId);
            const productsList = cart.products;

            if (!productsList) {
                productsList = [];
            }

            const isInCart = productsList.find(p => p._id === product._id);

            if (isInCart) {
                isInCart.quantity++;
            } else {
                product.quantity = 1;
                productsList.push(product);
            }

            return productsList;
        } catch (error) {
            logger.error(`ERROR: container error (addProductById): ${error}`);
        }
    }

    async deleteProductFromCart(cartId, productId) {
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8');
            const list = JSON.parse(content);
            const cart = list.find(c => c._id === cartId);
            const productsList = cart.products;

            if (!productsList) {
                productsList = [];
            }

            const indexOfProduct = productsList.findIndex(p => p._id === productId);
            productsList.splice(indexOfProduct, 1);
            const listString = JSON.stringify(list, null, 2);
            await fs.promises.writeFile(this.file, listString);
            return list;
        } catch (error) {
            logger.error(`ERROR: container error (deleteProductFromCart): ${error}`);
        }
    }
}

export default FsContainer;
