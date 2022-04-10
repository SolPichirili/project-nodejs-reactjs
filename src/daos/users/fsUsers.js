import options from '../../config.js';
import FsContainer from '../../containers/fsContainer.js'

class FsUsersDao extends FsContainer{
    constructor(){
        super(options.fs.usersPath);
    }
}

export default FsUsersDao;