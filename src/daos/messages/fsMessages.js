import options from '../../config.js';
import FsContainer from '../../containers/fsContainer.js'

class FsMessagesDao extends FsContainer{
    constructor(){
        super(options.fs.messagesPath);
    }
}

export default FsMessagesDao;