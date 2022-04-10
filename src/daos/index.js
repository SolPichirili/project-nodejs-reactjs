import FsCartsDao from './carts/fsCarts.js';
import FsMessagesDao from './messages/fsMessages.js';
import FsOrdersDao from './orders/fsOrders.js';
import FsProductsDao from './products/fsProducts.js';
import FsUsersDao from './users/fsUsers.js';

class PersistenceFactory {
    getPersistanceMethod(pers) {
        switch (pers) {

            case 'fs':
                return {
                    productsDao: new FsProductsDao(),
                    cartsDao: new FsCartsDao(),
                    usersDao: new FsUsersDao(),
                    messagesDao: new FsMessagesDao(),
                    ordersDao: new FsOrdersDao()
                }

            case 'memory':
                return {
                    productsDao: new FsProductsDao(),
                    cartsDao: new FsCartsDao(),
                    usersDao: new FsUsersDao(),
                    messagesDao: new FsMessagesDao(),
                    ordersDao: new FsOrdersDao()
                }

            default:
                return {
                    productsDao: new FsProductsDao(),
                    cartsDao: new FsCartsDao(),
                    usersDao: new FsUsersDao(),
                    messagesDao: new FsMessagesDao(),
                    ordersDao: new FsOrdersDao()
                }
        }
    }

    static getInstance(){

        if(!PersistenceFactory.instance){
            PersistenceFactory.instance = new PersistenceFactory();
        }

        return PersistenceFactory.instance;
    }
}

export default PersistenceFactory;