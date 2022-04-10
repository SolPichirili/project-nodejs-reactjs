import options from '../../config.js';
import FsContainer from '../../containers/fsContainer.js'

class FsProductsDao extends FsContainer{
    constructor(){
        super(options.fs.productsPath);
    }
}

export default FsProductsDao;