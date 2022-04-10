import options from '../../config.js';
import FsContainer from '../../containers/fsContainer.js'

class FsCartsDao extends FsContainer{
    constructor(){
        super(options.fs.cartsPath);
    }
}

export default FsCartsDao;