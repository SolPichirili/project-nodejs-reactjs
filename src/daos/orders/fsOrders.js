import options from '../../config.js';
import FsContainer from '../../containers/fsContainer.js'

class FsOrdersDao extends FsContainer{
    constructor(){
        super(options.fs.ordersPath);
    }
}

export default FsOrdersDao;